import "./pageheader.css";
import { useAuthContext } from "../hooks/useAuthContext.js";

function PageHeader() {
  const { user } = useAuthContext();
  const currentDate = new Date().toDateString();

  return (
    <header className="header-container">
      <div className="page-header">
        <div className="userInfo">
          <img
            src="images\user-circle-regular-36.png"
            alt="User Profile Picture"
          />
          <div className="user-name">
            {user.userID.firstname +
              " " +
              user.userID.middleinitial +
              ". " +
              user.userID.lastname}
          </div>
        </div>
        <div className="date">
          <div>{currentDate}</div>
          <img src="images\calendar-solid-36.png" alt="calendar icon" />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
