import { User, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppCtx } from "./contexts/AppCtx";
import { items } from "@/util/sidebarItems";
import { use, useContext } from "react";

export function AppSidebar() {
  // -------------------- States --------------------
  const navigate = useNavigate();

  const location = useLocation();
  // End of states

  // -------------------- Contexts --------------------
  const { userData } = useContext(AppCtx);
  console.log(userData);

  // End of contexts

  // Location url
  const locationText = location.pathname.slice(1);

  // -------------------- Functions --------------------

  // Handle logout
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("remember");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }
  // End of functions

  // -------------------- Component structure --------------------
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* Sidebar header */}
          <SidebarMenu className="mb-[var(--mainMargin)] border-b border-b-neutral-300">
            {/* Icon */}
            <div className="flex gap-2 p-5 ">
              <span>
                <img src="favicon.svg" alt="" />
              </span>

              {/* Title */}
              <span className="font-semibold">University Access</span>
            </div>
          </SidebarMenu>

          {/* Sidebar pages */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-5">
                    <Link
                      to={item.url}
                      className={`transition-all duration-300! p-5 cursor-pointer ${
                        locationText === item.condition &&
                        "bg-[var(--mainColor)] text-white  hover:bg-[#2563ebd9]! hover:text-white!"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-auto gap-3 py-2 flex justify-between">
                  {/* Avatar */}
                  <Avatar className="h-9 w-9 flex items-center">
                    <AvatarImage src="/avatar.jpg" alt="User" />
                    <AvatarFallback>
                      {userData
                        ? userData.data.user.name[0].toUpperCase()
                        : "I"}
                    </AvatarFallback>
                  </Avatar>

                  {/* User info */}
                  <div className="flex items-center text-left leading-tight">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {userData ? userData.data.user.name : "Loading..."}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {userData ? userData.data.user.email : "Loading..."}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              {/* Dropdown */}
              <DropdownMenuContent
                side="right"
                align="start"
                className="w-64 mb-5 duration-400"
              >
                {/* Account */}
                <div className="border-b">
                  <DropdownMenuItem className="gap-2 duration-200 ">
                    <User className="h-4 w-4 " />
                    Account
                  </DropdownMenuItem>
                </div>

                {/* Logout */}
                <div>
                  <DropdownMenuItem
                    className="gap-2 text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
