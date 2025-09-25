"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { removeFromCart, clearCart } from "@/redux/store/cartSlice";

export default function CartDropdown({
  total,
  onClose,
}: {
  total: string;
  onClose: () => void;
}) {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

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
                  onClick={() => dispatch(removeFromCart(course.id))}
                  className="text-red-500 text-sm"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <p className="font-bold mt-4">Total: ${total}</p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Clear
            </button>
            <Link
              href="/cart"
              onClick={onClose} // 👈 closes dropdown
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={onClose} // 👈 closes dropdown
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
