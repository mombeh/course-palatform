'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { quizResults } from '../../../data/mockQuizResults';

export default function ResultsPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');

  const filteredResults =
    selectedCourse === 'all'
      ? quizResults
      : quizResults.filter((r) => r.courseTitle === selectedCourse);

  const courses = Array.from(new Set(quizResults.map((r) => r.courseTitle)));

  // 🔹 Calculate stats
  const stats = useMemo(() => {
    if (filteredResults.length === 0) {
      return { avgScore: 0, passRate: 0, totalAttempts: 0 };
    }

    const totalAttempts = filteredResults.length;
    const totalScore = filteredResults.reduce((sum, r) => sum + r.score, 0);
    const avgScore = (totalScore / totalAttempts).toFixed(1);

    const passedCount = filteredResults.filter(
      (r) => r.status === 'Passed',
    ).length;
    const passRate = ((passedCount / totalAttempts) * 100).toFixed(1);

    return { avgScore, passRate, totalAttempts };
  }, [filteredResults]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Quiz Results</h1>

      {/* Course Filter */}
      <div>
        <label className="font-medium mr-2">Filter by Course:</label>
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

      {/* 🔹 Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow">
          <CardContent className="p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">Average Score</h2>
            <p className="text-2xl font-bold">{stats.avgScore}%</p>
          </CardContent>
        </Card>
        <Card className="shadow">
          <CardContent className="p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">Pass Rate</h2>
            <p className="text-2xl font-bold">{stats.passRate}%</p>
          </CardContent>
        </Card>
        <Card className="shadow">
          <CardContent className="p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">
              Total Attempts
            </h2>
            <p className="text-2xl font-bold">{stats.totalAttempts}</p>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card>
        <CardContent className="p-6">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Student</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result) => (
                <tr key={result.id} className="border-t">
                  <td className="px-4 py-2">{result.student}</td>
                  <td className="px-4 py-2">{result.courseTitle}</td>
                  <td className="px-4 py-2">
                    {result.score}/{result.total}
                  </td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      result.status === 'Passed'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {result.status}
                  </td>
                  <td className="px-4 py-2">{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredResults.length === 0 && (
            <p className="text-gray-500 mt-4">No quiz results found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
