import { Link } from "react-router-dom";
import StudentAccountList from "./StudentAccountsList.jsx";

function StudentAccountsHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S T U D E N T A C C O U N T S</h2>
      </div>
    </>
  );
}

function StudentAccounts() {
  return (
    <div className="studentaccounts-container">
      <StudentAccountsHeader />
      <div className="studentaccounts-main-content">
        <div className="studentaccounts-header">
          <label htmlFor="query" hidden>
            Search
          </label>
          <input type="text" name="query" placeholder="Search..." />
          <Link to={"new-student"}>
            <button>Add New Account</button>
          </Link>
        </div>
        <table className="studentaccountslist">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact Number</th>
              <th>Action</th> {/* Added for edit and delete buttons */}
            </tr>
          </thead>
          <StudentAccountList />
        </table>
      </div>
    </div>
  );
}

export default StudentAccounts;
