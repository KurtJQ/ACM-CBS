import "./newadmin.css";
import { Link } from "react-router-dom";

function NewAdminHeader() {
  return (
    <div className="new-admin-header">
      <Link to="/superadminpanel">
        <img src="src\assets\arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

function NewAdmin() {
  return (
    <div className="new-admin-container">
      <NewAdminHeader />
      <div className="new-admin-main-content">
        <div className="form">
          <form action="">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" />
            </div>
            <div>
              <label htmlFor="middleinitial">Middle Initial</label>
              <input type="text" name="middleinitial" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div>
              <label htmlFor="contactnumber">Contact Number</label>
              <input type="text" name="contactnumber" />
            </div>
            <div>
              <Link to="/superadminpanel">
                <button type="submit">Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAdmin;
