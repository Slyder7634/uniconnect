
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const handbookSections = [
  {
    id: 'conduct',
    title: 'Code of Conduct',
    content: `UniBridge is committed to maintaining a safe and respectful environment for all students, faculty, and staff. All members of the university community are expected to adhere to the principles of honesty, integrity, and respect. Prohibited behaviors include, but are not limited to, harassment, discrimination, bullying, and any form of violence. Students are expected to conduct themselves in a manner that is conducive to a positive learning environment, both on and off campus. Violations of the Code of Conduct will be subject to disciplinary action.`,
  },
  {
    id: 'integrity',
    title: 'Academic Integrity',
    content: `Academic integrity is the cornerstone of a university education. All students are expected to complete their own work and to properly cite any sources used. Plagiarism, cheating, fabrication of data, and any other form of academic dishonesty are serious offenses. Students found responsible for academic misconduct may face penalties ranging from a failing grade on an assignment to suspension or expulsion from the university. We encourage students to utilize resources like the Writing Center and to consult with their instructors to avoid unintentional plagiarism.`,
  },
  {
    id: 'policies',
    title: 'Campus Policies',
    content: `A comprehensive list of university policies can be found on the main university website. Key policies include:
- **Attendance Policy:** Regular attendance is expected in all classes. Specific attendance requirements are determined by the instructor for each course.
- **Grading Policy:** The university uses a standard A-F grading scale. Detailed information on grade points and GPA calculation is available from the Registrar's Office.
- **IT and Network Usage:** University computing resources are for academic use. Unauthorized use, including illegal downloading and network abuse, is prohibited.
- **Health and Safety:** All community members must comply with campus health and safety protocols.`,
  },
  {
    id: 'resources',
    title: 'Student Rights & Resources',
    content: `Students have the right to a learning environment free from discrimination and harassment. The university provides numerous resources to support student success, including:
- **Disability Services:** Accommodations are available for students with documented disabilities.
- **Counseling and Psychological Services (CAPS):** Confidential counseling is available to all students.
- **Office of the Dean of Students:** Provides advocacy and support for students facing challenges.`,
  },
];

export default function StudentHandbookPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Handbook</h1>
        <p className="text-muted-foreground">
          An overview of key university policies and student rights.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>University Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {handbookSections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="text-lg font-semibold">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="whitespace-pre-wrap text-base">{section.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
