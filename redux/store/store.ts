import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import qaReducer from "./qaSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        qa: qaReducer,
    },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
