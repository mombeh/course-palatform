// /components/TutorNotifications.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import {
    markAsRead,
    markAllAsRead,
    clearNotifications,
} from "@/redux/store/notificationSlice";

export default function TutorNotifications() {
    const notifications = useSelector(
        (state: RootState) => state.notification.notifications
    );
    const dispatch = useDispatch();

    return (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Notifications</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch(markAllAsRead())}
                        className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                        Mark All as Read
                    </button>
                    <button
                        onClick={() => dispatch(clearNotifications())}
                        className="text-sm bg-red-200 px-3 py-1 rounded hover:bg-red-300"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {notifications.length === 0 ? (
                <p className="text-gray-500">No notifications yet.</p>
            ) : (
                <ul className="space-y-3">
                    {notifications.map((n) => (
                        <li
                            key={n.id}
                            className={`p-3 border rounded-md ${n.read ? "bg-gray-50" : "bg-yellow-50"
                                }`}
                        >
                            <div className="flex justify-between items-center">
                                <span>{n.message}</span>
                                {!n.read && (
                                    <button
                                        onClick={() => dispatch(markAsRead(n.id))}
                                        className="text-xs text-blue-600 hover:underline"
                                    >
                                        Mark Read
                                    </button>
                                )}
                            </div>
                            <span className="text-xs text-gray-400">{n.date}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
