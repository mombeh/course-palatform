// /app/cart/page.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { removeFromCart, clearCart } from "@/redux/store/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart
    .reduce((sum, c) => sum + (c.price || 0), 0)
    .toFixed(2);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center font-bold text-lg mb-6">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Clear Cart
            </button>
            <Link
              href="/checkout"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
