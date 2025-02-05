import { Outlet } from "react-router";

export function PrivateLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
