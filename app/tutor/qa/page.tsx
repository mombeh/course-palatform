"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { questions } from "../../../data/mockeQA";

export default function QAPage() {
  const [qaList, setQaList] = useState(questions);
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [reply, setReply] = useState<{ [key: number]: string }>({});

  const filteredQA = qaList.filter((q) => {
    const courseMatch =
      selectedCourse === "all" || q.courseTitle === selectedCourse;
    const statusMatch =
      selectedStatus === "all" ||
      (selectedStatus === "answered" && q.answer) ||
      (selectedStatus === "unanswered" && !q.answer);
    return courseMatch && statusMatch;
  });

  const courses = Array.from(new Set(qaList.map((q) => q.courseTitle)));

  const handleReply = (id: number) => {
    setQaList((prev) =>
      prev.map((q) => (q.id === id ? { ...q, answer: reply[id] || "" } : q))
    );
    setReply((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Q&A Management</h1>

      {/* Filters */}
      <div className="flex gap-4">
        {/* Course Filter */}
        <div>
          <label className="font-medium mr-2">Course:</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="all">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="font-medium mr-2">Status:</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="all">All</option>
            <option value="answered">Answered</option>
            <option value="unanswered">Unanswered</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="grid gap-4">
        {filteredQA.map((q) => (
          <Card key={q.id} className="shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{q.courseTitle}</h2>
                <span className="text-sm text-gray-500">{q.date}</span>
              </div>
              <p className="text-sm">
                <strong>{q.student}:</strong> {q.question}
              </p>

              {q.answer ? (
                <div className="p-3 bg-gray-50 border rounded">
                  <p className="text-sm">
                    <strong>You:</strong> {q.answer}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <textarea
                    value={reply[q.id] || ""}
                    onChange={(e) =>
                      setReply((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    className="w-full border rounded-md p-2 text-sm"
                    placeholder="Type your answer..."
                  />
                  <button
                    onClick={() => handleReply(q.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Submit Answer
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {filteredQA.length === 0 && (
          <p className="text-gray-500">No questions found.</p>
        )}
      </div>
    </div>
  );
}
