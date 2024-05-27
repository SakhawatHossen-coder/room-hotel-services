import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Rooms from "../pages/Rooms";
import Register from "../pages/Register";
import RoomDetails from "../pages/RoomDetails";
import Statistics from "../pages/dashboard/Statistics";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>404</p>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
    ],
  },
]);
