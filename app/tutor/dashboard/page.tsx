// /app/tutor/dashboard/page.tsx
"use client";

import { tutorStats, monthlyEarnings } from "../../../data/mockTutor";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TutorDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tutor Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-gray-500">Total Courses</p>
            <h2 className="text-2xl font-bold">{tutorStats.totalCourses}</h2>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-gray-500">Total Students</p>
            <h2 className="text-2xl font-bold">{tutorStats.totalStudents}</h2>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">${tutorStats.totalRevenue}</h2>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-gray-500">Active Courses</p>
            <h2 className="text-2xl font-bold">{tutorStats.activeCourses}</h2>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Earnings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyEarnings}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#7C3AED" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
