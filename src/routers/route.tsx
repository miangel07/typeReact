import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import LoginComponent from "../components/Login";
import Home from "../components/Home";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <div><LoginComponent/></div>
  }
});
export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/home",
    component: function Index() {
      return <Home/>
    }
  });
