// /app/page.tsx
"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Learn Web Development Anytime, Anywhere 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Gain in-demand skills in HTML, CSS, JavaScript, React, Next.js, and more. 
          Join thousands of learners building real-world projects today.
        </p>
        <Link
          href="/courses"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
        >
          Browse Courses
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-2">📚 Expert Instructors</h3>
          <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-2">💻 Hands-on Projects</h3>
          <p className="text-gray-600">Build real-world apps to strengthen your skills step by step.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-2">⏰ Learn at Your Pace</h3>
          <p className="text-gray-600">Lifetime access so you can learn anytime, anywhere.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-20">
        <Link
          href="/courses"
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Start Learning Today
        </Link>
      </section>
    </div>
  );
}

