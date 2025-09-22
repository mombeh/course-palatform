"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "../../../data/mockReviews";

export default function ReviewsPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("all");

  const filteredReviews =
    selectedCourse === "all"
      ? reviews
      : reviews.filter((r) => r.courseTitle === selectedCourse);

  const courses = Array.from(new Set(reviews.map((r) => r.courseTitle)));

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Student Reviews</h1>

      {/* Course Filter */}
      <div>
        <label className="font-medium mr-2">Filter by Course:</label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="all">All Courses</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Reviews List */}
      <div className="grid gap-4">
        {filteredReviews.map((review) => (
          <Card key={review.id} className="shadow-md">
            <CardContent className="p-6 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{review.courseTitle}</h2>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>{review.student}:</strong> {review.comment}
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredReviews.length === 0 && (
          <p className="text-gray-500">No reviews found for this course.</p>
        )}
      </div>
    </div>
  );
}
