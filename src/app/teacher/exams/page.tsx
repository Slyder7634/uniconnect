import { exams, courses } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function TeacherExamsPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Exam Management</h1>
                <p className="text-muted-foreground">
                Manage exam schedules for your courses.
                </p>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Exam
            </Button>
       </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Schedules</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Exam Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="font-medium">{exam.courseCode}</TableCell>
                  <TableCell>
                    <Badge variant={exam.examType === 'Final' ? 'destructive' : 'secondary'}>
                      {exam.examType}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(exam.date).toLocaleDateString()}</TableCell>
                  <TableCell>{exam.time}</TableCell>
                  <TableCell>{exam.location}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Edit</Button>
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
