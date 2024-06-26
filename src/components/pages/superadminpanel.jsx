import { Link } from "react-router-dom";
import SuperAdminList from "../SuperAdminList";
import { useState } from "react";

function SuperAdminHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S U P E R A D M I N P A N E L</h2>
      </div>
    </>
  );
}

function SuperAdminPanel() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="superadminpanel-container">
      <SuperAdminHeader />
      <div className="superadmin-main-content">
        <div className="superadmin-header">
          <label htmlFor="query" hidden>
            Search
          </label>
          <input
            type="text"
            name="query"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to="newadmin">
            <button>Add New Account</button>
          </Link>
        </div>
        <div className="adminlist">
          <SuperAdminList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default SuperAdminPanel;
