// // /data/mockStudents.ts
// export type Student = {
//     id: string;
//     name: string;
//     email: string;
//     course: string;
//     enrolledAt: string;
//     progress: number;
// };

// export const students: Student[] = [
//     {
//         id: "s1",
//         name: "Alice Johnson",
//         email: "alice@example.com",
//         course: "React for Beginners",
//         enrolledAt: "2025-08-15",
//         progress: 80,
//     },
//     {
//         id: "s2",
//         name: "Bob Smith",
//         email: "bob@example.com",
//         course: "Next.js Mastery",
//         enrolledAt: "2025-08-20",
//         progress: 45,
//     },
//     {
//         id: "s3",
//         name: "Charlie Brown",
//         email: "charlie@example.com",
//         course: "Advanced TypeScript",
//         enrolledAt: "2025-08-25",
//         progress: 10,
//     },
// ];

// /data/mockStudents.ts
export type LessonProgress = {
  lesson: string;
  completed: boolean;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  enrolledAt: string;
  progress: number;
  bio?: string;
  lessons?: LessonProgress[];
};

export const students: Student[] = [
  {
    id: 's1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    course: 'React for Beginners',
    enrolledAt: '2025-08-15',
    progress: 80,
    bio: 'Frontend developer passionate about React.',
    lessons: [
      { lesson: 'Introduction to React', completed: true },
      { lesson: 'JSX and Components', completed: true },
      { lesson: 'State and Props', completed: true },
      { lesson: 'React Hooks', completed: false },
    ],
  },
  {
    id: 's2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    course: 'Next.js Mastery',
    enrolledAt: '2025-08-20',
    progress: 45,
    bio: 'Learning Next.js to build production apps.',
    lessons: [
      { lesson: 'Routing in Next.js', completed: true },
      { lesson: 'Data Fetching', completed: false },
      { lesson: 'API Routes', completed: false },
    ],
  },
  {
    id: 's3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    course: 'Advanced TypeScript',
    enrolledAt: '2025-08-25',
    progress: 10,
    bio: 'Backend developer exploring TypeScript.',
    lessons: [
      { lesson: 'Type Inference', completed: false },
      { lesson: 'Generics', completed: false },
      { lesson: 'Decorators', completed: false },
    ],
  },
];
