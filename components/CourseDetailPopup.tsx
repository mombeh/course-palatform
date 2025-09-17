// // /components/CourseDetailPopup.tsx
// "use client";

// import { useCart } from "../context/CartContext";
// import type { Course } from "../data/mockCourse";

// export default function CourseDetailPopup({
//   course,
//   onClose,
// }: {
//   course: Course;
//   onClose: () => void;
// }) {
//   const { addCourse } = useCart();

//   const handleAdd = () => {
//     addCourse(course);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <h2 className="text-xl font-bold mb-2">{course.title}</h2>
//         <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
//         <p className="font-bold text-lg mb-4">${course.price}</p>
//         <p className="text-gray-700 mb-4">
//           This is a mock description of the course. Replace with your own content.
//         </p>
//         <button
//           onClick={handleAdd}
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
