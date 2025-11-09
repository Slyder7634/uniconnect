import { courses } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function SchedulePage() {
  const groupedCourses = daysOfWeek.map(day => ({
    day,
    courses: courses.filter(course => course.day === day),
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Schedule</h1>
        <p className="text-muted-foreground">Your weekly course schedule.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {groupedCourses.map(({ day, courses }) => (
          <Card key={day} className="flex flex-col">
            <CardHeader>
              <CardTitle>{day}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div key={course.id} className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{course.name}</h3>
                      <Badge variant="secondary">{course.code}</Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{course.location}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No classes scheduled for {day}.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
