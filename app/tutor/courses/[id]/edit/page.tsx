"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { updateCourse } from "@/redux/store/tutorCoursesSlice";

export default function EditCoursePage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const course = useSelector((state: RootState) =>
    state.tutorCourses.courses.find((c) => c.id === id)
  );

  const [title, setTitle] = useState(course?.title || "");
  const [price, setPrice] = useState(course?.price.toString() || "");
  const [description, setDescription] = useState(course?.description || "");
  const [status, setStatus] = useState<"Published" | "Draft">(
    course?.status || "Draft"
  );

  useEffect(() => {
    if (!course) router.push("/tutor/courses");
  }, [course, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;

    dispatch(
      updateCourse({
        ...course,
        title,
        price: parseFloat(price),
        description,
        status,
      })
    );

    router.push("/tutor/courses");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}
