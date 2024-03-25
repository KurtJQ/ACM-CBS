import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import StudentRecords from "./components/pages/studentrecords.jsx";
import StudentAccounts from "./components/pages/StudentAccounts.jsx";
import SuperAdminPanel from "./components/pages/superadminpanel.jsx";
import PageHeader from "./components/PageHeader.jsx";
import PageFooter from "./components/PageFooter.jsx";
import NewTransaction from "./components/pages/NewTransaction.jsx";
import LoginSystem from "./components/pages/Login.jsx";
import NewAccount from "./components/pages/newaccount.jsx";
import NewAdmin from "./components/pages/newadmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSystem />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "studentrecords",
    element: <StudentRecords />,
  },
  {
    path: "/:studentID/newtransaction",
    element: <NewTransaction />,
  },
  {
    path: "studentaccounts",
    element: <StudentAccounts />,
  },
  {
    path: "new-student",
    element: <NewAccount />,
  },
  {
    path: "superadminpanel",
    element: <SuperAdminPanel />,
  },
  {
    path: "newadmin",
    element: <NewAdmin />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
