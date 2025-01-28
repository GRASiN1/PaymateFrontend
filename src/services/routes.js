import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import Groups from "../pages/groups";
import GroupDetail from "../components/groupCards/groupDetail";
import GroupList from "../components/groupCards/groupList";
import Test from "../pages/test";
import Hero from "../pages/Hero";
import Authentication from "../pages/authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
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
    path: "/authenticate",
    element: <Authentication />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
