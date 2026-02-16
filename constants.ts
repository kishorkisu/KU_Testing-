
import { Student, ClassRoom } from './types';

export const MOCK_STUDENTS: Student[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://picsum.photos/seed/1/100', attendanceRate: 95 },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://picsum.photos/seed/2/100', attendanceRate: 88 },
  { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', avatar: 'https://picsum.photos/seed/3/100', attendanceRate: 72 },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', avatar: 'https://picsum.photos/seed/4/100', attendanceRate: 100 },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@example.com', avatar: 'https://picsum.photos/seed/5/100', attendanceRate: 85 },
  { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', avatar: 'https://picsum.photos/seed/6/100', attendanceRate: 92 },
  { id: '7', name: 'George Miller', email: 'george@example.com', avatar: 'https://picsum.photos/seed/7/100', attendanceRate: 65 },
  { id: '8', name: 'Hannah Abbott', email: 'hannah@example.com', avatar: 'https://picsum.photos/seed/8/100', attendanceRate: 98 },
];

export const MOCK_CLASSES: ClassRoom[] = [
  {
    id: 'cs101',
    name: 'CS101',
    subject: 'Computer Science Fundamentals',
    students: MOCK_STUDENTS,
  },
  {
    id: 'math202',
    name: 'MATH202',
    subject: 'Advanced Calculus',
    students: MOCK_STUDENTS.slice(0, 5),
  },
];
