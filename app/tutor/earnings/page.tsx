"use client";

import { useState } from "react";
import { earningsStats, monthlyEarnings, transactions } from "../../../data/mockEarnings";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function EarningsPage() {
  // ✅ Local state so we can update values
  const [stats, setStats] = useState(earningsStats);
  const [message, setMessage] = useState<string | null>(null);

  const handlePayout = () => {
    if (stats.pendingPayout === 0) {
      setMessage("No pending payout available.");
      return;
    }

    const payout = stats.pendingPayout;
    setStats({
      ...stats,
      totalEarnings: stats.totalEarnings + payout,
      pendingPayout: 0,
    });

    setMessage(`✅ Payout of $${payout} requested successfully!`);
    setTimeout(() => setMessage(null), 3000); // auto hide message
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Earnings</h1>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm text-gray-600">Total Earnings</h2>
            <p className="text-2xl font-bold">${stats.totalEarnings}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm text-gray-600">This Month</h2>
            <p className="text-2xl font-bold">${stats.monthlyEarnings}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-sm text-gray-600">Pending Payout</h2>
              <p className="text-2xl font-bold">${stats.pendingPayout}</p>
            </div>
            <button
              onClick={handlePayout}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Request Payout
            </button>
            {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
          </CardContent>
        </Card>
      </div>

      {/* Earnings Chart */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Earnings (Last 6 Months)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2">Student</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="px-4 py-2">{t.course}</td>
                  <td className="px-4 py-2">{t.student}</td>
                  <td className="px-4 py-2 font-semibold">${t.amount}</td>
                  <td className="px-4 py-2">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
