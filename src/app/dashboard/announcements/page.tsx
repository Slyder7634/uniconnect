import { announcements } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest news from the university.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>University-wide Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {announcements.map((announcement) => (
              <AccordionItem key={announcement.id} value={`item-${announcement.id}`}>
                <AccordionTrigger>
                  <div className="flex flex-col text-left items-start">
                    <span className="font-semibold">{announcement.title}</span>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="whitespace-pre-wrap">{announcement.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
