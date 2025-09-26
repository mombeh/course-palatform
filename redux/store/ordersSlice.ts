import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
    id: number;
    courseId: number;
    courseTitle: string;
    student: string;
    amount: number;
    date: string;
}

interface OrdersState {
    orders: Order[];
}

const initialState: OrdersState = {
    orders: [],
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        },
        setOrders: (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
        },
    },
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
