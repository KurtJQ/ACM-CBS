import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
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
