"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store/store";
import { fetchTutorCourses, deleteTutorCourse } from "@/redux/store/tutorCoursesThunks";
import { toggleStatus } from "@/redux/store/tutorCoursesSlice";
import { useEffect } from "react";

export default function MyCoursesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { courses, loading, error } = useSelector((state: RootState) => state.tutorCourses);

  useEffect(() => {
    dispatch(fetchTutorCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  console.log("Loading:", loading, "Error:", error);


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
                <td className="px-4 py-2">{course.status}</td>
                <td className="px-4 py-2">{course.students}</td>
                <td className="px-4 py-2 flex gap-3">
                  <Link
                    href={`/tutor/courses/${course.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(toggleStatus(course.id))}
                    className="text-purple-600 hover:underline"
                  >
                    {course.status === "Published" ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    onClick={() => dispatch(deleteTutorCourse(course.id))}
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
    </div>
  );
}
