"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from "../ui/sidebar";
import { Icons } from "../icons";
import {
  LayoutDashboard,
  LogOut,
  Users,
  BookOpen,
  ClipboardCheck,
  FileText,
  CreditCard,
} from "lucide-react";
import { Button } from "../ui/button";

const links = [
    {
      href: "/teacher/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/teacher/courses",
      label: "My Courses",
      icon: BookOpen,
    },
    {
      href: "/teacher/students",
      label: "Student Grades",
      icon: Users,
    },
    {
        href: "/teacher/attendance",
        label: "Attendance",
        icon: ClipboardCheck,
    },
    {
        href: "/teacher/exams",
        label: "Exams",
        icon: FileText,
    },
    {
        href: "/teacher/fees",
        label: "Fees",
        icon: CreditCard,
    },
  ];

export function TeacherSidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Icons.Logo className="size-8 text-sidebar-primary" />
          <span className="text-lg font-semibold text-sidebar-primary">
            UniBridge
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href}>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  tooltip={link.label}
                  asChild={false} 
                >
                  <link.icon className="size-5" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="size-5" />
            <span className="text-sm">Logout</span>
          </Button>
         </Link>
      </SidebarFooter>
    </>
  );
}
