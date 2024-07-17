import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/"></Link>
      </div>
      <div>
        <Link to="/home"></Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
