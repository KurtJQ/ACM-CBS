import { Link } from "react-router-dom";
import "./pagestyles.css";

function NewAccountHeader() {
  return (
    <div className="new-account-header">
      <Link to="/studentaccounts">
        <img src="images\arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

function NewAccount() {
  return (
    <div className="new-account-container">
      <NewAccountHeader />
      <div className="new-account-main-content">
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
              <label htmlFor="yearlevel">Year Level</label>
              <input type="text" name="yearlevel" />
            </div>
            <div>
              <label htmlFor="semester">Semester</label>
              <input type="text" name="semester" />
            </div>
            <div>
              <label htmlFor="course">Course</label>
              <input type="text" name="course" />
            </div>
            <div>
              <Link to="/studentaccounts">
                <button type="submit">Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAccount;
