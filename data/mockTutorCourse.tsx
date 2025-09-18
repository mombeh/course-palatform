// /data/mockTutorCourses.ts
export type TutorCourse = {
    id: string;
    title: string;
    price: number;
    status: "Published" | "Draft";
    students: number;
  };
  
  export const tutorCourses: TutorCourse[] = [
    { id: "c1", title: "React for Beginners", price: 49.99, status: "Published", students: 34 },
    { id: "c2", title: "Advanced TypeScript", price: 59.99, status: "Draft", students: 0 },
    { id: "c3", title: "Next.js Mastery", price: 79.99, status: "Published", students: 12 },
  ];
  