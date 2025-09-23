// /components/CourseCard.tsx
"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/store/cartSlice";
import type { Course } from "../data/mockCourse";

export default function CourseCard({ course }: { course: Course }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(course));
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.instructor}</p>
      <p className="font-bold mt-2">${course.price}</p>

      <div className="flex gap-4 mt-3">
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-3 py-1 rounded"
        >
          Add to cart
        </button>

        <Link
          href={`/courses/${course.id}`}
          className="text-purple-600 underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
