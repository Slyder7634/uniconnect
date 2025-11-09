import type { ReactNode } from "react";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { StudentSidebarNav } from "@/components/dashboard/student-sidebar-nav";
import { Header } from "@/components/dashboard/header";
import { DashboardMotionWrapper } from "@/components/motion/dashboard-motion";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <StudentSidebarNav />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <Header />
        <DashboardMotionWrapper>
          {children}
        </DashboardMotionWrapper>
      </SidebarInset>
    </SidebarProvider>
  );
}
