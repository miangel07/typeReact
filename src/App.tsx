import { RouterProvider } from "@tanstack/react-router";
import { rootRoute } from "./routers/__root";
import { indexRoute,homeRoute } from "./routers/route.tsx";
import { createRouter } from "@tanstack/react-router";
const routeTree = rootRoute.addChildren([indexRoute,homeRoute]);
const router = createRouter({ routeTree });
function App() {
  return <RouterProvider router={router} />
}

export default App
