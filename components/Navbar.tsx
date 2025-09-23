// /components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.cart);

  const total = cart
    .reduce((sum, c) => sum + (c.price || 0), 0)
    .toFixed(2);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      <Link href="/" className="text-2xl font-bold text-purple-700">
        CourseHub
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-purple-600">
          Home
        </Link>
        <Link href="/courses" className="hover:text-purple-600">
          Courses
        </Link>
        <Link href="/tutor/dashboard" className="hover:text-purple-600">
          Tutor Dashboard
        </Link>

        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex items-center gap-2"
          >
            🛒
            {cart.length > 0 && (
              <span className="bg-purple-600 text-white rounded-full px-2 text-sm">
                {cart.length}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {open && <CartDropdown total={total} />}
        </div>
      </div>
    </nav>
  );
}
