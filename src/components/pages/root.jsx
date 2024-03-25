import PageHeader from "../PageHeader.jsx";
import PageFooter from "../PageFooter.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
}
