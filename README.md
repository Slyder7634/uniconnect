# UniConnect - Your All-in-One University Hub

![UniConnect Logo](https://raw.githubusercontent.com/firebase/firebase-studio/main/static/img/logo-256.png)

**UniConnect** is a modern, all-in-one student and teacher portal designed to streamline the university experience. Built with a powerful tech stack including Next.js, Firebase, and Google's Gemini AI, it provides a seamless and intuitive interface for managing academic life.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-red?logo=firebase)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-blue?logo=google&logoColor=white)](https://ai.google.dev/)

---

## ✨ Features

UniConnect is packed with features for both students and faculty, creating a centralized hub for all academic needs.

### For Students:
- **Personalized Dashboard:** A quick overview of upcoming classes, GPA, and recent announcements.
- **Course Schedule:** A clean, weekly view of all registered courses with times, locations, and instructor details.
- **Grade Tracking:** Detailed grade reports for every course and semester.
- **Attendance Monitoring:** Keep track of attendance records for all classes.
- **Exam Schedules:** View upcoming midterm and final exam dates and locations.
- **Fee Management:** A clear breakdown of tuition payments and outstanding dues.
- **Academic Resources:** Quick access to the library, research databases, and other essential student services.

### For Teachers:
- **Teaching Dashboard:** An overview of courses, total student count, and recent activity.
- **Course Management:** A list of all courses being taught for the current semester.
- **Student Performance:** View and manage grades for students in your courses.
- **Attendance Tracking:** Monitor and review attendance for your classes.
- **Exam Management:** Create and manage exam schedules for your courses.

### 🤖 AI-Powered Assistant
- **UniConnect AI:** An intelligent chatbot powered by **Google Gemini** to instantly answer questions about university life, policies, schedules, and more.

---

## 🛠️ Tech Stack

This project is built with a modern, scalable, and efficient technology stack.

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN/UI](https://ui.shadcn.com/)
- **Generative AI:** [Google Gemini](https://ai.google.dev/) via [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/hosting)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/uniconnect.git
    cd uniconnect
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env` file in the root of your project and add your Google AI API key. You can get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```env
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

### Login Credentials
You can use these credentials to test the student and teacher dashboards:
- **Student:**
  - **ID:** `student01`
  - **Password:** `password`
- **Teacher:**
  - **ID:** `teacher01`
  - **Password:** `password`

---

## ☁️ Deployment

This application is optimized for deployment on **Firebase App Hosting**, providing a secure, fast, and reliable platform for your Next.js application.

The `apphosting.yaml` file in the root directory contains the configuration for App Hosting. To deploy, simply connect your repository to a Firebase project with App Hosting enabled.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
