import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import ProfileHeader from "../ProfileHeader";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center p-4">
            <SidebarTrigger className="fixed" />
            <ProfileHeader className="flex-1" />
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-auto px-20">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
