// /data/mockCourses.ts
export type Course = {
  id: string;
  title: string;
  price: number;
  instructor: string;
};

export const mockCourses: Course[] = [
  { id: "1", title: "React for Beginners", price: 49.99, instructor: "John Doe" },
  { id: "2", title: "Mastering TypeScript", price: 59.99, instructor: "Jane Smith" },
  { id: "3", title: "Next.js 14 Complete Guide", price: 69.99, instructor: "Alex Johnson" },
  { id: "4", title: "Node.js API Development", price: 39.99, instructor: "Mary Lee" },
];
