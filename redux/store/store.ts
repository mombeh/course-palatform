import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import qaReducer from "./qaSlice";
import notificationReducer from "./notificationSlice";
import tutorReducer from "./tutorSlice";
import ordersReducer from "./ordersSlice"; // ✅ new
import tutorCoursesReducer from "./tutorCoursesSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        qa: qaReducer,
        tutor: tutorReducer,
        notification: notificationReducer,
        orders: ordersReducer,
        tutorCourses: tutorCoursesReducer, // ✅ add this
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
