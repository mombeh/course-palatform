"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { students } from "../../../../data/mockStudents";

export default function StudentDetailPage() {
  const { id } = useParams();
  const studentData = students.find((s) => s.id === id);

  const [student, setStudent] = useState(studentData);

  if (!student) {
    return <p className="text-red-500">Student not found.</p>;
  }

  // ✅ Toggle lesson completion
  const toggleLesson = (index: number) => {
    const updatedLessons = student.lessons?.map((lesson, i) =>
      i === index ? { ...lesson, completed: !lesson.completed } : lesson
    );

    // ✅ Recalculate overall progress
    const completedCount = updatedLessons?.filter((l) => l.completed).length || 0;
    const totalLessons = updatedLessons?.length || 1;
    const newProgress = Math.round((completedCount / totalLessons) * 100);

    setStudent({
      ...student,
      lessons: updatedLessons,
      progress: newProgress,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{student.name}</h1>
      <p className="text-gray-700 mb-2">📧 {student.email}</p>
      <p className="text-gray-700 mb-2">🎓 Enrolled in: {student.course}</p>
      <p className="text-gray-700 mb-2">📅 Enrolled on: {student.enrolledAt}</p>
      <p className="text-gray-700 mb-4">💬 {student.bio}</p>

      {/* Overall Progress */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Overall Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-purple-600 h-3 rounded-full"
            style={{ width: `${student.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{student.progress}% completed</p>
      </div>

      {/* Lessons Progress (Editable) */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Lessons Progress</h2>
        <ul className="space-y-2">
          {student.lessons?.map((lesson, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded-md"
            >
              <span>{lesson.lesson}</span>
              <button
                onClick={() => toggleLesson(index)}
                className={`px-3 py-1 rounded-md text-sm ${
                  lesson.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {lesson.completed ? "Completed" : "Mark as Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
