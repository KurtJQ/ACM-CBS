import { useState } from "react";
import "./StudentRecordsList.css";
import { Link } from "react-router-dom";

function StudentList(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="items" id={props.studentid}>
      <div className="top-info">
        <div className="left-side">
          <div className="lastname">{props.lastname}</div>
          <div className="firstname">{props.firstname}</div>
          <div className="middleinitial">{props.middleinitial}</div>
          <div className="studentID">{props.studentid}</div>
        </div>
        <div className="right-side">
          <div>
            <Link
              key={props.studentid}
              to={`/studentrecords/newtransaction/${props.studentid}`}
            >
              <button>New Transaction</button>
            </Link>
          </div>
          <div>
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? "-" : "+"}
            </button>
          </div>
        </div>
      </div>
      <div className={`bottom-info ${toggle ? "" : "hide"}`}>
        <div className="payment-list">
          <div className="firstperiodic">
            1st Periodic Exam <span>{props.firstperiodic + " PHP"}</span>
          </div>
          <div className="prelim">
            Prelim <span>{props.prelim + " PHP"}</span>
          </div>
          <div className="secondperiodic">
            2nd Periodic Exam <span>{props.secondperiodic + " PHP"}</span>
          </div>
          <div className="midterm">
            Midterm <span>{props.midterm + " PHP"}</span>
          </div>
          <div className="thirdperiodic">
            3rd Periodic Exam <span>{props.thirdperiodic + " PHP"}</span>
          </div>
          <div className="prefinals">
            Pre-Finals <span>{props.prefinals + " PHP"}</span>
          </div>
          <div className="fourthperiodic">
            4th Periodic Exam <span>{props.fourthperiodic + " PHP"}</span>
          </div>
          <div className="finals">
            Finals <span>{props.finals + " PHP"}</span>
          </div>
        </div>
        <div className="payment-records">
          <div className="payment-records-header">Previous Transactions</div>
          <div className="student-transactions">
            <div className="items-student-transactions" id="">
              <div className="top-info-student-transaction">
                <div className="date">03/21/2024</div>
                <div>1st Periodic Exam</div>
                <div>1500 PHP</div>
              </div>
              <div className="bottom-info-student-transaction">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
