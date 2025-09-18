// /app/tutor/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function TutorLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/tutor/dashboard" },
    { name: "My Courses", href: "/tutor/courses" },
    { name: "Students", href: "/tutor/students" },
    { name: "Earnings", href: "/tutor/earnings" },
    { name: "Settings", href: "/tutor/settings" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Tutor Panel</h2>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded ${
                pathname === link.href ? "bg-slate-700" : "hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
