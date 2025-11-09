import { user, announcements, courses } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Calendar,
  GraduationCap,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const upcomingCourse = courses.find(
    (course) => new Date() < new Date(`2024-01-01 ${course.time.split(" - ")[0]}`)
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your academic life.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Class
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {upcomingCourse ? (
              <>
                <div className="text-2xl font-bold">{upcomingCourse.name}</div>
                <p className="text-xs text-muted-foreground">
                  {upcomingCourse.day} at {upcomingCourse.time}
                </p>
              </>
            ) : (
              <div className="text-xl font-semibold">No upcoming classes today.</div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall GPA
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.85</div>
            <p className="text-xs text-muted-foreground">
              Based on completed semesters
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
