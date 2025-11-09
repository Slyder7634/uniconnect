import { academicResources } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Academic Resources</h1>
        <p className="text-muted-foreground">
          Your gateway to academic success.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {academicResources.map((resource) => (
          <Link href={resource.href} key={resource.id} className="group">
            <Card className="h-full flex flex-col transition-all group-hover:border-primary group-hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <resource.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Go to Resource
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

    