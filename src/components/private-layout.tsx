import { Navigate, Outlet } from "react-router";
import { AppBreadcrumb } from "./app-breadcrumb";
import { AppSidebar } from "./app-sidebar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { UserNav } from "./user-nav";
import { useAuth } from "./auth-context";

export function PrivateLayout() {
  const { isAuthenticated } = useAuth();

  console.log("authed", isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 px-2 py-3 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-4 mr-2" />
              <AppBreadcrumb />
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
    </>
  );
}
