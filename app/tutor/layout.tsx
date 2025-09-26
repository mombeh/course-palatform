'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/store/authSlice'; // make sure you have this

export default function TutorLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const links = [
    { name: 'Dashboard', href: '/tutor/dashboard' },
    { name: 'My Courses', href: '/tutor/courses' },
    { name: 'Students', href: '/tutor/students' },
    { name: 'Earnings', href: '/tutor/earnings' },
    { name: 'Settings', href: '/tutor/settings' },
    { name: 'Analytics', href: '/tutor/analytics' },
    { name: 'Reviews', href: '/tutor/reviews' },
    { name: 'Results', href: '/tutor/results' },
    { name: 'Question & Answers', href: '/tutor/qa' },
    { name: 'Profile', href: '/tutor/profile' },
    { name: 'Orders', href: '/tutor/orders' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // redirect after logout
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Tutor Panel</h2>

        {/* Top nav */}
        <nav className="flex flex-col gap-4 flex-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded ${pathname === link.href
                ? 'bg-purple-600'
                : 'hover:bg-purple-700'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom logout */}
        <button
          onClick={handleLogout}
          className="mt-6 hover:bg-purple-700 px-3 py-2 rounded text-white"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
