import { Link, useParams } from "react-router-dom";

function NewTransactionHeader() {
  return (
    <div className="new-transaction-header">
      <Link to="/studentrecords">
        <img src="images/arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

// function getName(studentid) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].student_id != studentid) {
//       return;
//     }
//     return (
//       data[i].last_name + ", " + data[i].first_name + " " + data[i].middle_name
//     );
//   }
// }

function NewTransaction() {
  const params = useParams();
  return (
    <div className="new-transaction-container">
      <NewTransactionHeader />
      <div className="new-transaction-main-content">
        <div className="dropdown">
          <div className="student-info">
            <div className="student-name">{getName(params.studentID)}</div>
            <div className="student-id">Student ID: {params.studentID}</div>
          </div>
          <div className="select">
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
            <Link to="/studentrecords">
              <button type="submit">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;
