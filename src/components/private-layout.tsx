import { Outlet } from "react-router";
import { AppSidebar } from "./app-sidebar";
import { Button } from "./ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { UserNav } from "./user-nav";

export function PrivateLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="px-2 py-3 border-b flex items-center justify-between">
          <div>
            <SidebarTrigger />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Feedback
            </Button>
            <UserNav />
          </div>
        </header>
        <div className="p-5">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
