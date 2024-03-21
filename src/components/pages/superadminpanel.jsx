import "./superadminpanel.css";
import { Link } from "react-router-dom";
import SuperAdminList from "../SuperAdminList";
import data from "../SAMPLE_DATA_ADMIN.json";

function SuperAdminHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="src\assets\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S U P E R A D M I N P A N E L</h2>
      </div>
    </>
  );
}

function SuperAdminPanel() {
  return (
    <div className="superadminpanel-container">
      <SuperAdminHeader />
      <div className="superadmin-main-content">
        <div className="superadmin-header">
          <label htmlFor="query" hidden>
            Search
          </label>
          <input type="text" name="query" placeholder="Search..." />
          <button>Add New Account</button>
        </div>
        <div className="adminlist">
          {data.map((admins) => {
            console.log(admins);
            return (
              <SuperAdminList
                firstname={admins.first_name}
                lastname={admins.last_name}
                middleinitial={admins.middle_name}
                cashierid={admins.cashierID}
                email={admins.email}
                password={admins.password}
                contactnum={admins.contactnum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SuperAdminPanel;
