
export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  attendanceRate: number;
}

export interface AttendanceRecord {
  studentId: string;
  status: 'present' | 'absent' | 'late';
  timestamp: string;
}

export interface AttendanceSession {
  id: string;
  classId: string;
  date: string;
  records: AttendanceRecord[];
}

export interface ClassRoom {
  id: string;
  name: string;
  subject: string;
  students: Student[];
}

export enum View {
  DASHBOARD = 'dashboard',
  TAKE_ATTENDANCE = 'take_attendance',
  HISTORY = 'history',
  SETTINGS = 'settings'
}
