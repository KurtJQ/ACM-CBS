import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import StudentRecords from "./components/pages/studentrecords.jsx";
import PageHeader from "./components/PageHeader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/studentrecords",
    element: <StudentRecords />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageHeader />
    <RouterProvider router={router} />
  </React.StrictMode>
);
