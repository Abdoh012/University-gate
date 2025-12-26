// Shadcn sidebar
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// React router
import { Outlet } from "react-router-dom";

// Comps
import ProfileHeader from "../ProfileHeader";
import AuthWrapper, { AuthCtx } from "../contexts/AuthCtx";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <AuthWrapper>
          <AppSidebar />
        </AuthWrapper>

        {/* Main content */}
        <div className="flex flex-col flex-1 min-w-0 bg-neutral-100">
          {/* Header */}
          <div className="flex items-center p-4 ps-12 sm:ps-4">
            <div className="fixed left-3 top-8 sm:static sm:left-auto sm:top-auto">
              <SidebarTrigger className="cursor-pointer hover:bg-neutral-200 duration-300" />
            </div>
            <ProfileHeader className="flex-1" />
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
