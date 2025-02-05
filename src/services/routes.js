import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import Groups from "../pages/groups";
import GroupDetail from "../components/groupCards/groupDetail";
import GroupList from "../components/groupCards/groupList";
import Hero from "../pages/Hero";
import Authentication from "../pages/authentication";
import Policies from "../components/profile/policies/Policies";
import UserDetails from "../components/profile/userDetails/UserDetails";
import UpdateProfile from "../components/profile/updateProfile/UpdateProfile";
import ResetPassword from "../components/profile/resetPassword/ResetPassword";
import Addresses from "../components/profile/addresses/Addresses";
import Theme from "../components/profile/theme/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <UserDetails />,
      },
      {
        path: "/profile/policies",
        element: <Policies />,
      },
      {
        path: "/profile/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/profile/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/profile/addresses",
        element: <Addresses />,
      },
      {
        path: "/profile/theme",
        element: <Theme />,
      },
    ],
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
]);

export default router;
