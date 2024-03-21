import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import StudentRecords from "./components/pages/studentrecords.jsx";
import StudentAccounts from "./components/pages/StudentAccounts.jsx";
import SuperAdminPanel from "./components/pages/superadminpanel.jsx";
import PageHeader from "./components/PageHeader.jsx";
import PageFooter from "./components/PageFooter.jsx";
import NewTransaction from "./components/pages/NewTransaction.jsx";
import LoginSystem from "./components/pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSystem />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/studentrecords",
    element: <StudentRecords />,
  },
  {
    path: "/studentaccounts",
    element: <StudentAccounts />,
  },
  {
    path: "/superadminpanel",
    element: <SuperAdminPanel />,
  },
  {
    path: "/studentrecords/newtransaction/:studentID",
    element: <NewTransaction />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageHeader />
    <RouterProvider router={router} />
    <PageFooter />
  </React.StrictMode>
);
