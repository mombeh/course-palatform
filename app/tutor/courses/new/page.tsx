// /app/tutor/courses/new/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { tutorCourses, TutorCourse } from '../../../../data/mockTutorCourse';

export default function CreateCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'Published' | 'Draft'>('Draft');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse: TutorCourse = {
      id: `c${tutorCourses.length + 1}`,
      title,
      price: parseFloat(price),
      status,
      students: 0,
    };

    // For now, just push into mock data (in real app -> API/DB)
    tutorCourses.push(newCourse);

    // Redirect back to My Courses
    router.push('/tutor/courses');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Course Title</label>
          <input
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price (USD)</label>
          <input
            type="number"
            step="0.01"
            className="mt-1 w-full border rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="mt-1 w-full border rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            className="mt-1 w-full border rounded px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Published' | 'Draft')}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Save Course
        </button>
      </form>
    </div>
  );
}
