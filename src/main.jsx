import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <AuthProviders> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </AuthProviders> */}
  </React.StrictMode>
);
