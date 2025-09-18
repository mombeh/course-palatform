"use client";

import { dashboardStats, earningsData, studentData, recentEnrollments } from "../../../data/mockDashboard";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

export default function TutorDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm font-medium text-gray-600">Total Courses</h2>
            <p className="text-2xl font-bold">{dashboardStats.totalCourses}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm font-medium text-gray-600">Total Students</h2>
            <p className="text-2xl font-bold">{dashboardStats.totalStudents}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm font-medium text-gray-600">Monthly Earnings</h2>
            <p className="text-2xl font-bold">${dashboardStats.monthlyEarnings}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm font-medium text-gray-600">Pending Reviews</h2>
            <p className="text-2xl font-bold">{dashboardStats.pendingReviews}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Earnings (Last 6 Months)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Student Enrollments</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Enrollments */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2">Student</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentEnrollments.map((enroll) => (
                <tr key={enroll.id} className="border-t">
                  <td className="px-4 py-2">{enroll.course}</td>
                  <td className="px-4 py-2">{enroll.student}</td>
                  <td className="px-4 py-2">{enroll.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
