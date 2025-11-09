
import { user, courses, announcements } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  BookOpen,
  Users,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TeacherDashboardPage() {
    const teacherCourses = courses.filter(c => c.instructor === 'Dr. Alan Turing' || c.instructor === 'Dr. Ada Lovelace');

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Dr. Turing!</h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your teaching dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Your Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherCourses.length}</div>
            <p className="text-xs text-muted-foreground">
              Courses you are teaching this semester.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              Across all your courses
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Announcements
            </CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.length}</div>
            <p className="text-xs text-muted-foreground">
              {announcements.length > 0
                ? `Latest: "${announcements[0].title}"`
                : "No new announcements"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest announcements and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.slice(0, 3).map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-start gap-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{announcement.title}</p>
                  <p className="text-sm text-muted-foreground">{announcement.content.substring(0, 100)}...</p>
                  <div className="text-xs text-muted-foreground mt-1">
                    {announcement.date}
                  </div>
                </div>
                 <Link href="/dashboard/announcements">
                    <Button variant="outline" size="sm">View</Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
