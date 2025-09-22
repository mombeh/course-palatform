// /app/tutor/courses/page.tsx
'use client';

import { useState } from 'react';
import {
  tutorCourses as mockCourses,
  TutorCourse,
} from '../../../data/mockTutorCourse';
import Link from 'next/link';

export default function MyCoursesPage() {
  const [courses, setCourses] = useState<TutorCourse[]>(mockCourses);
  const [courseToDelete, setCourseToDelete] = useState<TutorCourse | null>(
    null,
  );

  const toggleStatus = (id: string) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'Published' ? 'Draft' : 'Published' }
          : c,
      ),
    );
  };

  const confirmDelete = () => {
    if (!courseToDelete) return;
    setCourses((prev) => prev.filter((c) => c.id !== courseToDelete.id));
    setCourseToDelete(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <Link
        href="/tutor/courses/new"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        + Create New Course
      </Link>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Students</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t">
                <td className="px-4 py-2">{course.title}</td>
                <td className="px-4 py-2">${course.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      course.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="px-4 py-2">{course.students}</td>
                <td className="px-4 py-2 flex gap-3">
                  <Link
                    href={`/tutor/courses/${course.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => toggleStatus(course.id)}
                    className="text-purple-600 hover:underline"
                  >
                    {course.status === 'Published' ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => setCourseToDelete(course)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {courseToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Delete Course</h2>
            <p className="mb-6">
              Are you sure you want to delete{' '}
              <span className="font-semibold">{courseToDelete.title}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setCourseToDelete(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
