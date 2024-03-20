import PageHeader from "./components/PageHeader";
import StudentRecords from "./components/pages/studentrecords";
import Dashboard from "./components/pages/dashboard";
import { Router } from "react-router";

function App() {
  return (
    <>
      <PageHeader />
      <Dashboard />
    </>
  );
}

export default App;
// might not be needed anymore
