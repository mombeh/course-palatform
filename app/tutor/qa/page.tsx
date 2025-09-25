'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { setQuestions, addAnswer } from '@/redux/store/qaSlice';
import { Card, CardContent } from '@/components/ui/card';
import { questions as mockQA } from '../../../data/mockeQA';

export default function QAPage() {
  const dispatch = useDispatch();
  const qaList = useSelector((state: RootState) => state.qa.questions);

  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [reply, setReply] = useState<{ [key: number]: string }>({});

  // Load mock questions into Redux store
  useEffect(() => {
    if (qaList.length === 0) {
      dispatch(setQuestions(mockQA));
    }
  }, [dispatch, qaList.length]);

  const filteredQA = qaList.filter((q) => {
    const courseMatch =
      selectedCourse === 'all' || q.courseTitle === selectedCourse;
    const statusMatch =
      selectedStatus === 'all' ||
      (selectedStatus === 'answered' && q.answer) ||
      (selectedStatus === 'unanswered' && !q.answer);
    return courseMatch && statusMatch;
  });

  const courses = Array.from(new Set(qaList.map((q) => q.courseTitle)));

  const handleReply = (id: number) => {
    if (!reply[id]) return;
    dispatch(addAnswer({ id, answer: reply[id] }));
    setReply((prev) => ({ ...prev, [id]: '' }));
  };

  // 🔹 Stats
  const totalQuestions = qaList.length;
  const answeredCount = qaList.filter((q) => q.answer).length;
  const unansweredCount = totalQuestions - answeredCount;

  useEffect(() => {
    dispatch(setQuestions(mockQA));
  }, [dispatch]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Q&A Management</h1>

      {/* 🔹 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="shadow">
          <CardContent className="p-4 text-center">
            <h2 className="text-lg font-semibold">Total Questions</h2>
            <p className="text-2xl font-bold text-purple-600">{totalQuestions}</p>
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardContent className="p-4 text-center">
            <h2 className="text-lg font-semibold">Answered</h2>
            <p className="text-2xl font-bold text-green-600">{answeredCount}</p>
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardContent className="p-4 text-center">
            <h2 className="text-lg font-semibold">Unanswered</h2>
            <p className="text-2xl font-bold text-red-600">{unansweredCount}</p>
          </CardContent>
        </Card>
      </div>

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
                    value={reply[q.id] || ''}
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
