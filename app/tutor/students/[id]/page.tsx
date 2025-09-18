"use client";

import { useParams } from "next/navigation";
import { students } from "../../../../data/mockStudents";

export default function StudentDetailPage() {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return <p className="text-red-500">Student not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{student.name}</h1>
      <p className="text-gray-700 mb-2">📧 {student.email}</p>
      <p className="text-gray-700 mb-2">🎓 Enrolled in: {student.course}</p>
      <p className="text-gray-700 mb-2">📅 Enrolled on: {student.enrolledAt}</p>
      <p className="text-gray-700 mb-4">💬 {student.bio}</p>

      {/* Progress Bar */}
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

      {/* Lessons Progress */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Lessons Progress</h2>
        <ul className="space-y-2">
          {student.lessons?.map((lesson, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded-md"
            >
              <span>{lesson.lesson}</span>
              <span
                className={`text-sm font-medium ${
                  lesson.completed ? "text-green-600" : "text-red-500"
                }`}
              >
                {lesson.completed ? "Completed" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
