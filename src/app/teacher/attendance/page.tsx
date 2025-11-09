import { attendance, studentNames } from "@/lib/data";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/lib/data";

export default function TeacherAttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Attendance</h1>
            <p className="text-muted-foreground">
            Monitor attendance for your courses.
            </p>
        </div>
        <div className="w-1/4">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select a course..." />
                </SelectTrigger>
                <SelectContent>
                    {courses.filter(c => c.instructor === 'Dr. Alan Turing' || c.instructor === 'Dr. Ada Lovelace').map(course => (
                        <SelectItem key={course.id} value={course.code}>{course.name} ({course.code})</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CS101 - Attendance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead className="text-center">Total Classes</TableHead>
                <TableHead className="text-center">Attended</TableHead>
                <TableHead className="w-[200px]">Attendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((record, index) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">student{record.id.padStart(2, '0')}</TableCell>
                  <TableCell>{studentNames[index % studentNames.length]}</TableCell>
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
