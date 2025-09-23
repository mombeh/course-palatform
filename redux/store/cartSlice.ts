// /store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;  // change from number → string
    title: string;
    price: number;
    instructor?: string;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
