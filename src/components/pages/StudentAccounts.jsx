import "./StudentAccounts.css";
import StudentAccountsList from "./StudentAccountsList";
import list from "../SAMPLE_DATA.json";
import { Link } from "react-router-dom";

function StudentAccountsHeader() {
  return (
    <>
      <div className="header">
        <Link to="/dashboard">
          <img src="src\assets\arrow-back-regular-48.png" alt="back button" />
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
          <button>Add New Account</button>
        </div>
        <div className="studentaccountslist">
          {list.map((student) => {
            console.log(student);
            return (
              <StudentAccountsList
                firstname={student.first_name}
                lastname={student.last_name}
                middlename={student.middle_name}
                studentID={student.student_id}
                email={student.email}
                password={student.password}
                contactnum={student.contactnum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentAccounts;
