// /redux/store/notificationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
    id: number;
    type: "question" | "earning" | "review";
    message: string;
    date: string;
    read: boolean;
}

interface NotificationState {
    notifications: Notification[];
}

const initialState: NotificationState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Omit<Notification, "id" | "read">>) => {
            const newNotification: Notification = {
                id: Date.now(),
                read: false,
                ...action.payload,
            };
            state.notifications.unshift(newNotification);
        },
        markAsRead: (state, action: PayloadAction<number>) => {
            const notif = state.notifications.find((n) => n.id === action.payload);
            if (notif) notif.read = true;
        },
        markAllAsRead: (state) => {
            state.notifications.forEach((n) => (n.read = true));
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
    },
});

export const { addNotification, markAsRead, markAllAsRead, clearNotifications } =
    notificationSlice.actions;

export default notificationSlice.reducer;
