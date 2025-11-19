
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { useAuth } from "@/firebase";

const formSchema = z.object({
  uniqueId: z.string().email("Please enter a valid email."),
  password: z.string().min(1, "Password is required"),
});

const FAKE_USERS = {
  "student@UniBridge.com": { password: "password", role: "student" },
  "teacher@UniBridge.com": { password: "password", role: "teacher" },
};

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      uniqueId: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { uniqueId, password } = values;
    const user = FAKE_USERS[uniqueId as keyof typeof FAKE_USERS];

    if (user && user.password === password) {
      toast({
        title: "Login Successful",
        description: "Welcome back! Redirecting to your dashboard.",
      });
      if (user.role === 'teacher') {
        router.push("/teacher/dashboard");
      } else {
        router.push("/dashboard");
      }
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="uniqueId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., student@UniBridge.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="e.g., password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>
      <Alert className="mt-6">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Testing Credentials</AlertTitle>
        <AlertDescription>
          <p>Use the following credentials for testing:</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li><b>Email:</b> student@UniBridge.com, <b>Password:</b> password</li>
            <li><b>Email:</b> teacher@UniBridge.com, <b>Password:</b> password</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
