// /components/CartDropdown.tsx
'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartDropdown({ total }: { total: string }) {
  const { cart, removeCourse } = useCart();

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
      <h3 className="font-bold mb-2">Your Cart</h3>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {cart.map((course) => (
              <li
                key={course.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>{course.title}</span>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-red-500 text-sm"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <p className="font-bold mt-4">Total: ${total}</p>

          <div className="flex justify-between mt-4">
            <Link
              href="/cart"
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
