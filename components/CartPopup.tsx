// /components/CartPopup.tsx
"use client";

import Link from "next/link";
import type { Course } from "../data/mockCourse";

export default function CartPopup({
  addedCourse,
  onClose,
}: {
  addedCourse: Course;
  onClose: () => void;
}) {
  const relatedCourses: Course[] = [
    { id: "101", title: "Advanced React", price: 59.99, instructor: "Jane Doe" },
    { id: "102", title: "TypeScript Mastery", price: 49.99, instructor: "Alex Smith" },
  ];

  return (
    <div className="absolute top-0 right-0 w-80 bg-white shadow-lg p-4 rounded-lg z-50">
      {/* Header with X button */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Added to Cart</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 font-bold"
          aria-label="Close popup"
        >
          ✕
        </button>
      </div>

      {/* Main content */}
      <p className="mb-2">{addedCourse.title}</p>

      <Link
        href="/cart"
        className="block mt-2 bg-purple-600 text-white px-3 py-1 rounded text-center"
        onClick={onClose}
      >
        Go to cart
      </Link>

      <h4 className="mt-4 font-semibold">You might also like</h4>
      <ul className="space-y-2">
        {relatedCourses.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            {c.title} - ${c.price}
          </li>
        ))}
      </ul>

      <Link
        href="/cart"
        className="block mt-4 bg-green-600 text-white px-3 py-1 rounded text-center"
        onClick={onClose}
      >
        Add all to cart
      </Link>
    </div>
  );
}
