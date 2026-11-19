import { Navigate, type RouteProps } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import GreetingPage from "../pages/GreetingPage";

export interface AppRoute extends Omit<RouteProps, "children"> {
  children?: AppRoute[];
}

// One manifest screen is one route: screen.greeting -> /greeting.
const appRoutes: AppRoute[] = [
  { path: "/", element: <Navigate to="/greeting" replace /> },
  {
    element: <AppLayout />,
    children: [{ path: "/greeting", element: <GreetingPage /> }],
  },
  { path: "*", element: <Navigate to="/greeting" replace /> },
];

export default appRoutes;
