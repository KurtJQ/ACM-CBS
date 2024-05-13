import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
  const { user } = useAuthContext();
  const superadmin = user.userID.access_level == "superadmin";

  return (
    <div className="dashboard">
      <h2>DASHBOARD</h2>
      <div className="buttons">
        <div className="button-container">
          <Link to="/studentrecords">
            <button className="button">Student Records</button>
          </Link>
          <Link to="/studentaccounts">
            <button className="button">Student Accounts</button>
          </Link>
          {superadmin && (
            <Link to="/superadminpanel">
              <button className="button">Super Admin Panel</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
