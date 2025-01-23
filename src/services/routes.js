import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Profile from "../pages/profile";
import Groups from "../pages/groups";
import GroupDetail from "../components/groupCards/groupDetail";
import GroupList from "../components/groupCards/groupList";
import Test from "../pages/test";

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
    children: [
      {
        index: true,
        element: <GroupList />,
      },
      {
        path: "/groups/:id",
        element: <GroupDetail />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
