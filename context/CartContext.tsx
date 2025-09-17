// /context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type Course = {
  id: string;
  title: string;
  price: number;
  instructor: string;
};

type CartContextType = {
  cart: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Course[]>([]);

  const addCourse = (course: Course) => {
    setCart((prev) => (prev.find((c) => c.id === course.id) ? prev : [...prev, course]));
  };

  const removeCourse = (id: string) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addCourse, removeCourse, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
