'use client';

import { Card, CardContent } from '@/components/ui/card';
import { coursesPerformance } from '../../../data/mockAnalytics';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { exportToCSV } from '../../../utils/exportToCSV';

const COLORS = ['#6366F1', '#22C55E', '#FACC15', '#EF4444'];

export default function AnalyticsPage() {
  const handleExport = () => {
    exportToCSV(coursesPerformance, 'tutor_analytics');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <button
          onClick={handleExport}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Export CSV
        </button>
      </div>

      {/* Top Performing Courses */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Performing Courses</h2>
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2">Enrollments</th>
                <th className="px-4 py-2">Revenue</th>
                <th className="px-4 py-2">Completion Rate</th>
              </tr>
            </thead>
            <tbody>
              {coursesPerformance.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="px-4 py-2">{c.title}</td>
                  <td className="px-4 py-2">{c.enrollments}</td>
                  <td className="px-4 py-2 font-semibold">${c.revenue}</td>
                  <td className="px-4 py-2">{c.completionRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Revenue Breakdown per Course */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={coursesPerformance}
                dataKey="revenue"
                nameKey="title"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {coursesPerformance.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Student Completion Rates */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Completion Rates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={coursesPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completionRate" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
