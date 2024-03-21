import "./newtransaction.css";
import { Link, useParams } from "react-router-dom";

function NewTransactionHeader() {
  return (
    <div className="new-transaction-header">
      <Link to="/studentrecords">
        <img src="src\assets\arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

function NewTransaction() {
  const params = useParams();
  return (
    <div className="new-transaction-container">
      <NewTransactionHeader />
      <div className="new-transaction-main-content">
        <div className="new-transaction-content-area">
          <div>Student ID: {params.studentID}</div>
          <div className="dropdown">
            <div>
              <input type="radio" name="exams" />
              First Periodic Exam
            </div>
            <div>
              <input type="radio" name="exams" />
              Prelim
            </div>
            <div>
              <input type="radio" name="exams" />
              Second Periodic Exam
            </div>
            <div>
              <input type="radio" name="exams" />
              Midterm
            </div>
            <div>
              <input type="radio" name="exams" />
              Third Periodic Exam
            </div>

            <div>
              <input type="radio" name="exams" />
              Prefinals
            </div>
            <div>
              <input type="radio" name="exams" />
              Fourth Periodic Exam
            </div>
            <div>
              <input type="radio" name="exams" />
              Finals
            </div>
            <input type="text" placeholder="Amount" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;
