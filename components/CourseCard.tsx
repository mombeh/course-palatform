// // /components/CourseCard.tsx
// "use client";

// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import CartPopup from "./CartPopup";
// import type { Course } from "../data/mockCourse";

// export default function CourseCard({ course }: { course: Course }) {
//   const { addCourse } = useCart();
//   const [showPopup, setShowPopup] = useState(false);

//   const handleAdd = () => {
//     addCourse(course);
//     setShowPopup(true);
//   };

//   return (
//     <div className="relative border rounded-lg p-4 hover:shadow-lg">
//       <h3 className="font-semibold">{course.title}</h3>
//       <p className="text-sm text-gray-500">{course.instructor}</p>
//       <p className="font-bold mt-2">${course.price}</p>

//       <button
//         onClick={handleAdd}
//         className="bg-purple-600 text-white px-3 py-1 rounded mt-3"
//       >
//         Add to cart
//       </button>

//       {showPopup && (
//         <CartPopup addedCourse={course} onClose={() => setShowPopup(false)} />
//       )}
//     </div>
//   );
// }

// /components/CourseCard.tsx
'use client';

import Link from 'next/link';
import type { Course } from '../data/mockCourse';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.instructor}</p>
      <p className="font-bold mt-2">${course.price}</p>

      <Link
        href={`/courses/${course.id}`}
        className="text-purple-600 underline mt-3 block"
      >
        View Details
      </Link>
    </div>
  );
}
