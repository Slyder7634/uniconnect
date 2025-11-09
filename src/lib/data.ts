import { Book, Calendar, ClipboardCheck, CreditCard, FileText, GraduationCap, Handshake, Library, Megaphone, Milestone, PencilRuler, Search } from "lucide-react";

export type User = {
  id: string;
  name: string;
  role: 'student' | 'teacher';
};

export type Course = {
  id: string;
  name: string;
  code: string;
  instructor: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  location: string;
};

export type Grade = {
  id: string;
  courseCode: string;
  courseName: string;
  semester: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  credits: number;
};

export type Announcement = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export type Resource = {
    id: string;
    title:string;
    description: string;
    href: string;
    icon: React.ElementType;
};

export type AttendanceRecord = {
  id: string;
  courseCode: string;
  courseName: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
};

export type Exam = {
  id: string;
  courseCode: string;
  courseName: string;
  examType: 'Midterm' | 'Final';
  date: string;
  time: string;
  location: string;
};

export type Fee = {
  id: string;
  semester: string;
  details: { item: string; amount: number }[];
  total: number;
  dueDate: string;
  status: 'Paid' | 'Unpaid';
  paymentDetails?: {
    paymentDate: string;
    transactionId: string;
    paymentMethod: string;
  };
};


export const user: User = {
  id: 'student01',
  name: 'Alex Doe',
  role: 'student',
};

export const studentNames = [
    "Priya Sharma",
    "Rohan Gupta",
    "Ananya Reddy",
    "Vikram Singh",
    "Sneha Patel",
    "Arjun Kumar",
    "Diya Mehta",
    "Kabir Joshi"
];

export const courses: Course[] = [
  { id: '1', name: 'Introduction to Computer Science', code: 'CS101', instructor: 'Dr. Alan Turing', day: 'Monday', time: '10:00 AM - 11:30 AM', location: 'Hall A' },
  { id: '2', name: 'Advanced Calculus', code: 'MATH203', instructor: 'Dr. Isaac Newton', day: 'Monday', time: '02:00 PM - 03:30 PM', location: 'Hall B' },
  { id: '3', name: 'Quantum Physics', code: 'PHY305', instructor: 'Dr. Albert Einstein', day: 'Tuesday', time: '09:00 AM - 10:30 AM', location: 'Lab 1' },
  { id: '4', name: 'World History', code: 'HIST101', instructor: 'Dr. Herodotus', day: 'Wednesday', time: '11:00 AM - 12:30 PM', location: 'Hall C' },
  { id: '5', name: 'Data Structures and Algorithms', code: 'CS202', instructor: 'Dr. Ada Lovelace', day: 'Thursday', time: '01:00 PM - 02:30 PM', location: 'Lab 2' },
  { id: '6', name: 'Literary Analysis', code: 'LIT210', instructor: 'Dr. William Shakespeare', day: 'Friday', time: '10:00 AM - 11:30 AM', location: 'Room 101' },
];

export const grades: Grade[] = [
  { id: '1', courseCode: 'CS101', courseName: 'Introduction to Computer Science', semester: 'Fall 2023', grade: 'A', credits: 3 },
  { id: '2', courseCode: 'MATH101', courseName: 'Calculus I', semester: 'Fall 2023', grade: 'B', credits: 4 },
  { id: '3', courseCode: 'ENG101', courseName: 'English Composition', semester: 'Fall 2023', grade: 'A', credits: 3 },
  { id: '4', courseCode: 'PHY101', courseName: 'General Physics I', semester: 'Spring 2024', grade: 'B', credits: 4 },
  { id: '5', courseCode: 'CHEM101', courseName: 'General Chemistry I', semester: 'Spring 2024', grade: 'C', credits: 4 },
  { id: '6', courseCode: 'HIST102', courseName: 'American History', semester: 'Spring 2024', grade: 'A', credits: 3 },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Final Exam Schedule for Spring 2024 Released',
    date: 'April 15, 2024',
    content: 'The final exam schedule for the Spring 2024 semester has been released. Please check the university portal under the "Examinations" section to view your personalized schedule. Ensure you have no conflicts and report any issues to the registrar\'s office by April 25th.'
  },
  {
    id: '2',
    title: 'Summer Semester Registration Now Open',
    date: 'April 10, 2024',
    content: 'Registration for the Summer 2024 semester is now open. A wide range of courses are available, including online and in-person options. Early registration is recommended to secure your spot in high-demand courses. The registration deadline is May 15th.'
  },
  {
    id: '3',
    title: 'University Library Extended Hours for Finals',
    date: 'April 5, 2024',
    content: 'To support students during the final examination period, the university library will have extended hours. From April 20th to May 10th, the library will be open 24/7. Additional study spaces and resources will also be available. Good luck with your exams!'
  },
];

export const academicResources: Resource[] = [
    {
      id: "1",
      title: "Library Portal",
      description: "Access our extensive collection of books, journals, and digital media.",
      href: "#",
      icon: Library,
    },
    {
      id: "2",
      title: "Research Databases",
      description: "Find scholarly articles and publications for your research needs.",
      href: "/dashboard/resources/research-databases",
      icon: Search,
    },
    {
      id: "3",
      title: "Writing Center",
      description: "Get help with essays, research papers, and other writing assignments.",
      href: "/dashboard/resources/writing-portal",
      icon: PencilRuler,
    },
    {
      id: "4",
      title: "Student Handbook",
      description: "View university policies, academic regulations, and student conduct codes.",
      href: "/dashboard/resources/student-handbook",
      icon: Book,
    },
    {
      id: "5",
      title: "Career Services",
      description: "Explore internships, job opportunities, and career counseling.",
      href: "#",
      icon: Handshake,
    },
    {
      id: "6",
      title: "Academic Advising",
      description: "Plan your course schedule and track your degree progress.",
      href: "/dashboard/resources/academic-advising",
      icon: Milestone,
    },
];

export const attendance: AttendanceRecord[] = [
  { id: '1', courseCode: 'CS101', courseName: 'Introduction to Computer Science', totalClasses: 30, attendedClasses: 28, percentage: 93 },
  { id: '2', courseCode: 'MATH203', courseName: 'Advanced Calculus', totalClasses: 30, attendedClasses: 29, percentage: 97 },
  { id: '3', courseCode: 'PHY305', courseName: 'Quantum Physics', totalClasses: 28, attendedClasses: 25, percentage: 89 },
  { id: '4', courseCode: 'HIST101', courseName: 'World History', totalClasses: 25, attendedClasses: 25, percentage: 100 },
  { id: '5', courseCode: 'CS202', courseName: 'Data Structures and Algorithms', totalClasses: 32, attendedClasses: 30, percentage: 94 },
  { id: '6', courseCode: 'LIT210', courseName: 'Literary Analysis', totalClasses: 24, attendedClasses: 22, percentage: 92 },
];

export const exams: Exam[] = [
  { id: '1', courseCode: 'CS101', courseName: 'Introduction to Computer Science', examType: 'Midterm', date: '2024-03-15', time: '10:00 AM', location: 'Hall A' },
  { id: '2', courseCode: 'MATH203', courseName: 'Advanced Calculus', examType: 'Midterm', date: '2024-03-18', time: '02:00 PM', location: 'Hall B' },
  { id: '3', courseCode: 'PHY305', courseName: 'Quantum Physics', examType: 'Final', date: '2024-05-10', time: '09:00 AM', location: 'Exam Hall 1' },
  { id: '4', courseCode: 'HIST101', courseName: 'World History', examType: 'Final', date: '2024-05-12', time: '11:00 AM', location: 'Exam Hall 2' },
];

export const fees: Fee[] = [
  {
    id: '1',
    semester: 'Fall 2023',
    details: [
      { item: 'Tuition Fee', amount: 450000 },
      { item: 'Library Fee', amount: 5000 },
      { item: 'Lab Fee', amount: 7500 },
    ],
    total: 462500,
    dueDate: '2023-09-01',
    status: 'Paid',
    paymentDetails: {
      paymentDate: '2023-08-25',
      transactionId: 'TXN123456789',
      paymentMethod: 'Online Banking'
    }
  },
  {
    id: '2',
    semester: 'Spring 2024',
    details: [
      { item: 'Tuition Fee', amount: 450000 },
      { item: 'Library Fee', amount: 5000 },
      { item: 'Sports Facility Fee', amount: 3500 },
    ],
    total: 458500,
    dueDate: '2024-01-15',
    status: 'Unpaid',
  },
];
