import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Profile from "../pages/profile";
import Groups from "../pages/groups";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
]);

export default router;
