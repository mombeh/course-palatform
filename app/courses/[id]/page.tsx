// /app/courses/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { mockCourses } from "../../../data/mockCourse";
import { addToCart } from "@/redux/store/cartSlice";

export default function CourseDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();

  const course = mockCourses.find((c) => c.id === String(params.id));

  if (!course) {
    return <p className="p-6">Course not found.</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <p className="text-xl font-bold mb-6">${course.price}</p>

      <p className="mb-6 text-gray-700">
        This is a detailed description of the course, covering syllabus,
        learning outcomes, and who this course is for.
      </p>

      <button
        onClick={() => dispatch(addToCart(course))}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
