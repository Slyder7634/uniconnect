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
  Calendar,
  GraduationCap,
  Megaphone,
  Library,
  LogOut,
  Users,
  BookOpen
} from "lucide-react";
import { Button } from "../ui/button";

const studentLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/schedule",
    label: "My Schedule",
    icon: Calendar,
  },
  {
    href: "/dashboard/grades",
    label: "My Grades",
    icon: GraduationCap,
  },
  {
    href: "/dashboard/announcements",
    label: "Announcements",
    icon: Megaphone,
  },
  {
    href: "/dashboard/resources",
    label: "Resources",
    icon: Library,
  },
];

const teacherLinks = [
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
  ];

export function SidebarNav({ role = 'student' }: { role?: 'student' | 'teacher' }) {
  const pathname = usePathname();
  const links = role === 'student' ? studentLinks : teacherLinks;

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
