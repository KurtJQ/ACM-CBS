import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transactions from "./transactions";

function StudentList(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="items" id={props.student._id}>
        <div className="top-info">
          <div className="left-side">
            <div className="lastname">{props.student.lastname}</div>
            <div className="firstname">{props.student.firstname}</div>
            <div className="middleinitial">{props.student.middleinitial}</div>
            <div className="studentID">{props.student._id}</div>
          </div>
          <div className="right-side">
            <div>
              <Link
                key={props.student._id}
                to={`${props.student._id}/newtransaction`}
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
              1st Periodic Exam <span>{1500 + " PHP"}</span>
            </div>
            <div className="prelim">
              Prelim <span>{1500 + " PHP"}</span>
            </div>
            <div className="secondperiodic">
              2nd Periodic Exam <span>{1500 + " PHP"}</span>
            </div>
            <div className="midterm">
              Midterm <span>{1500 + " PHP"}</span>
            </div>
            <div className="thirdperiodic">
              3rd Periodic Exam <span>{1500 + " PHP"}</span>
            </div>
            <div className="prefinals">
              Pre-Finals <span>{1500 + " PHP"}</span>
            </div>
            <div className="fourthperiodic">
              4th Periodic Exam <span>{1500 + " PHP"}</span>
            </div>
            <div className="finals">
              Finals <span>{1500 + " PHP"}</span>
            </div>
          </div>
          {/* This is where listTransactions will take place */}
          <div className="payment-records">
            <div className="payment-records-header">Previous Transactions</div>
            <div className="student-transactions">
              <Transactions studentID={props.student._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
