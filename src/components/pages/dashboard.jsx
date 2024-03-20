import React, { useState, useEffect } from "react";
import logout from "../../assets/logout-icon.png";
import "./dashboard.css";
// import { Link } from 'react-router-dom';

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
            <button class="button" onclick="goToStudentRecords()">
              Student Records
            </button>
            <button class="button" onclick="goToStudentAccounts()">
              Student Accounts
            </button>
            <button class="button" onclick="goToSuperAdminPanel()">
              Super Admin Panel
            </button>
          </div>

          <footer>
            <p>
              {" "}
              Log Out Account<img className="logout-icon" src={logout}></img>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
