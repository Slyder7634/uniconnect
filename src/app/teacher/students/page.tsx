import { grades, studentNames } from "@/lib/data";
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

export default function TeacherStudentsPage() {
    const getGradeColor = (grade: string) => {
        switch (grade) {
          case 'A': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
          case 'B': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
          case 'C': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
          case 'D': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
          case 'F': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
          default: return 'bg-secondary text-secondary-foreground';
        }
      };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Grades</h1>
        <p className="text-muted-foreground">
          View grades for students in your courses.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CS101 - Introduction to Computer Science</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead className="text-right">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.filter(g => g.courseCode === 'CS101').map((g, index) => (
                <TableRow key={g.id}>
                  <TableCell className="font-medium">student{g.id.padStart(2, '0')}</TableCell>
                  <TableCell>{studentNames[index % studentNames.length]}</TableCell>
                  <TableCell className="text-right">
                    <Badge className={`font-bold ${getGradeColor(g.grade)}`}>{g.grade}</Badge>
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
