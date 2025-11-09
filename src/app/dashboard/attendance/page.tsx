import { attendance } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function AttendancePage() {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Attendance</h1>
        <p className="text-muted-foreground">
          Your attendance record for the current semester.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead className="text-center">Total Classes</TableHead>
                <TableHead className="text-center">Attended</TableHead>
                <TableHead className="w-[200px]">Attendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.courseCode}</TableCell>
                  <TableCell>{record.courseName}</TableCell>
                  <TableCell className="text-center">{record.totalClasses}</TableCell>
                  <TableCell className="text-center">{record.attendedClasses}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={record.percentage} className="h-2 [&>div]:bg-primary" />
                      <Badge variant="outline">{record.percentage}%</Badge>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
