"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { setOrders } from "@/redux/store/ordersSlice";
import { mockOrders } from "../../../data/mockOrders";

export default function TutorOrdersPage() {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders.orders);

    useEffect(() => {
        dispatch(setOrders(mockOrders));
    }, [dispatch]);

    const totalEarnings = orders.reduce((sum, o) => sum + o.amount, 0);

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Order History</h1>
            <p className="text-lg font-semibold">
                Total Earnings: ${totalEarnings.toFixed(2)}
            </p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2 text-left">Date</th>
                            <th className="border p-2 text-left">Course</th>
                            <th className="border p-2 text-left">Student</th>
                            <th className="border p-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o) => (
                            <tr key={o.id}>
                                <td className="border p-2">{o.date}</td>
                                <td className="border p-2">{o.courseTitle}</td>
                                <td className="border p-2">{o.student}</td>
                                <td className="border p-2 text-right">${o.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
