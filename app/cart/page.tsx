// /app/cart/page.tsx
'use client';

import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeCourse } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.{' '}
          <Link href="/courses" className="text-purple-600 underline">
            Browse courses
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((course) => (
              <li
                key={course.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-gray-500">${course.price}</p>
                </div>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Total + Checkout */}
          <div className="mt-6 flex justify-between items-center">
            <p className="font-bold text-xl">
              Total: ${cart.reduce((sum, c) => sum + c.price, 0).toFixed(2)}
            </p>
            <Link
              href="/checkout"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
