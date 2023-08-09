import { createBrowserRouter } from "react-router-dom";
import Analytics from "../pages/dashboards/Analytics";
import Ecommerce from "../pages/dashboards/Ecommerce";
import Chat from "../pages/apps/chat/Chat";
import Email from "../pages/apps/email/Email";
import LoginForm from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/home",
    element: <Analytics />,
  },
  {
    path: "ecommerce",
    element: <Ecommerce />,
  },
  {
    path: "apps",
    element: <Chat />,
  },
  {
    path: "email",
    element: <Email />,
  },
]);
