"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store/store";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const total = cart.reduce((sum, c) => sum + (c.price || 0), 0).toFixed(2);

  // 👇 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

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
        <div className="relative" ref={dropdownRef}>
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
          {open && <CartDropdown total={total} onClose={() => setOpen(false)} />}
        </div>
      </div>
    </nav>
  );
}
