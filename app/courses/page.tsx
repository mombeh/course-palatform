// /app/courses/page.tsx
'use client';

import { mockCourses } from '../../data/mockCourse';
import CourseCard from '../../components/CourseCard';

export default function CoursesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
