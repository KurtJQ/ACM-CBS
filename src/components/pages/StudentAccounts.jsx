import "./pagestyles.css";
import StudentAccountsList from "./StudentAccountsList";
import list from "../SAMPLE_DATA.json";
import { Link } from "react-router-dom";

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
          <tbody>
            {list.map((student) => (
              <tr key={student.student_id}>
                <td>{student.last_name}</td>
                <td>{student.first_name}</td>
                <td>{student.middle_name}</td>
                <td>{student.student_id}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
                <td>{student.contactnum}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentAccounts;
