import { Order } from "@/redux/store/ordersSlice";

export const mockOrders: Order[] = [
  {
    id: 1,
    courseId: 101,
    courseTitle: "React for Beginners",
    student: "Alice Johnson",
    amount: 49.99,
    date: "2025-08-20",
  },
  {
    id: 2,
    courseId: 102,
    courseTitle: "Advanced TypeScript",
    student: "Bob Smith",
    amount: 79.99,
    date: "2025-08-22",
  },
  {
    id: 3,
    courseId: 101,
    courseTitle: "React for Beginners",
    student: "Charlie Davis",
    amount: 49.99,
    date: "2025-08-25",
  },
];
