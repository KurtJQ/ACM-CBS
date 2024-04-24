import { useState } from "react";
import "./StudentRecordsList.css";
import { Link } from "react-router-dom";

const ListTransactions = (props) => {
  return (
    <div className="items-student-transactions" id="">
      <div className="top-info-student-transaction">
        <div className="date">
          {new Date(props.transaction.date).toLocaleDateString()}
        </div>
        <div>{props.transaction.item} Exam</div>
        <div>{props.transaction.paymentAmount} PHP</div>
      </div>
      <div className="bottom-info-student-transaction">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

function StudentList(props) {
  const [toggle, setToggle] = useState(false);

  function populateTransactions() {
    return props.student.transactions.map((transactions) => {
      console.log(transactions);
      return (
        <ListTransactions
          transaction={transactions}
          key={transactions.paymentID}
        />
      );
    });
  }

  return (
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
            1st Periodic Exam <span>{props.student.exams[0] + " PHP"}</span>
          </div>
          <div className="prelim">
            Prelim <span>{props.student.exams[1] + " PHP"}</span>
          </div>
          <div className="secondperiodic">
            2nd Periodic Exam <span>{props.student.exams[2] + " PHP"}</span>
          </div>
          <div className="midterm">
            Midterm <span>{props.student.exams[3] + " PHP"}</span>
          </div>
          <div className="thirdperiodic">
            3rd Periodic Exam <span>{props.student.exams[4] + " PHP"}</span>
          </div>
          <div className="prefinals">
            Pre-Finals <span>{props.student.exams[5] + " PHP"}</span>
          </div>
          <div className="fourthperiodic">
            4th Periodic Exam <span>{props.student.exams[6] + " PHP"}</span>
          </div>
          <div className="finals">
            Finals <span>{props.student.exams[7] + " PHP"}</span>
          </div>
        </div>
        {/* This is where listTransactions will take place */}
        <div className="payment-records">
          <div className="payment-records-header">Previous Transactions</div>
          <div className="student-transactions">
            <ListTransactions transaction={props.student.transactions[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
