
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Contact } from 'lucide-react';

const advisors = [
  {
    name: 'Prof. Charu Singh',
    department: 'Computer Science & Engineering',
    email: 'csingh@UniBridge.edu',
  },
  {
    name: 'Dr. Payal Devi',
    department: 'Humanities & Social Sciences',
    email: 'pdevi@UniBridge.edu',
  },
  {
    name: 'Prof. Upasana Upadhyay',
    department: 'Natural & Applied Sciences',
    email: 'uupadhyay@UniBridge.edu',
  },
];

export default function AcademicAdvisingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Academic Advising</h1>
        <p className="text-muted-foreground">
          Guidance and support for your academic journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>The Role of Your Advisor</CardTitle>
            <CardDescription>Your academic advisor is your primary resource for academic planning and support.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Help you understand degree requirements and course prerequisites.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Assist with course selection and creating a balanced schedule.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Provide guidance on choosing a major, minor, or specialization.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Connect you with campus resources like tutoring, career services, and counseling.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Monitor your academic progress and help you stay on track for graduation.</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">It's recommended to meet with your advisor at least once per semester.</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preparing for Your Advising Session</CardTitle>
            <CardDescription>Make the most of your meeting with these tips.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Review your degree audit or academic progress report beforehand.</li>
              <li>Come prepared with a list of questions and topics you want to discuss.</li>
              <li>Draft a potential course schedule for the upcoming semester.</li>
              <li>Think about your long-term academic and career goals.</li>
              <li>Be open and honest about any academic challenges you are facing.</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-6 w-6"/> Departmental Advisors</CardTitle>
          <CardDescription>Contact an advisor from your department to schedule an appointment.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor) => (
            <Card key={advisor.email} className="bg-secondary/50">
              <CardHeader>
                 <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Contact className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold">{advisor.name}</p>
                        <p className="text-sm text-muted-foreground">{advisor.department}</p>
                    </div>
                 </div>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={`mailto:${advisor.email}`}>Contact Advisor</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
