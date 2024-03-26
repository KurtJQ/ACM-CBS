import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import StudentRecords from "./components/pages/studentrecords.jsx";
import StudentAccounts from "./components/pages/StudentAccounts.jsx";
import SuperAdminPanel from "./components/pages/superadminpanel.jsx";
import NewTransaction from "./components/pages/NewTransaction.jsx";
import LoginSystem from "./components/pages/Login.jsx";
import NewAccount from "./components/pages/newaccount.jsx";
import NewAdmin from "./components/pages/newadmin.jsx";
import Root from "./components/pages/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "studentrecords",
        element: <StudentRecords />,
      },
      {
        path: "studentrecords/:studentID/newtransaction",
        element: <NewTransaction />,
      },
      {
        path: "studentaccounts",
        element: <StudentAccounts />,
      },
      {
        path: "studentaccounts/new-student",
        element: <NewAccount />,
      },
      {
        path: "superadminpanel",
        element: <SuperAdminPanel />,
      },
      {
        path: "superadminpanel/newadmin",
        element: <NewAdmin />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginSystem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
