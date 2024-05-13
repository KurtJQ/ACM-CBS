import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { AuthContextProvider } from "./scripts/AuthContext.jsx";
import { useAuthContext } from "./hooks/useAuthContext.js";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import StudentRecords from "./components/pages/studentrecords.jsx";
import StudentAccounts from "./components/pages/StudentAccounts.jsx";
import SuperAdminPanel from "./components/pages/superadminpanel.jsx";
import NewTransaction from "./components/pages/NewTransaction.jsx";
import LoginSystem from "./components/pages/Login.jsx";
import NewAccount from "./components/pages/newaccount.jsx";
import NewAdmin from "./components/pages/newadmin.jsx";
import Root from "./components/pages/root.jsx";

function ReactRouter() {
  const { user } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "login",
      element: !user ? <LoginSystem /> : <Navigate to="/" />,
    },
    {
      path: "/",
      element: user ? <Root /> : <Navigate to="login" />,
      children: [
        {
          index: true,
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
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReactRouter />
    </AuthContextProvider>
  </React.StrictMode>
);
