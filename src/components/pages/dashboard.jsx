import React, { useState, useEffect } from "react";
import logout from "../../assets/logout-icon.png";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  // const goToStudentAccounts = () => {
  //   history.push('/student-accounts');
  // };

  // const goToStudentRecords = () => {
  //   history.push('/student-records');
  // };

  // const goToSuperAdminPanel = () => {
  //   history.push('/super-admin-panel');
  // };

  return (
    <div>
      <div className="dashboard">
        <h2>DASHBOARD</h2>
        <div className="buttons">
          <div class="button-container">
            <Link to="/studentrecords">
              <button class="button">Student Records</button>
            </Link>
            <Link to="/studentaccounts">
              <button class="button">Student Accounts</button>
            </Link>
            <Link to="/superadminpanel">
              <button class="button">Super Admin Panel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
