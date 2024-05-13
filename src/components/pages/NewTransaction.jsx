import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function NewTransactionHeader() {
  return (
    <div className="new-transaction-header">
      <Link to="/studentrecords">
        <img src="images/arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

function NewTransaction() {
  const { user } = useAuthContext();
  const params = useParams();
  const [student, setStudent] = useState([]);
  const [prevTransaction, setPrevTransaction] = useState([]);
  const [transaction, setTransaction] = useState({
    _id: 0,
    studentID: parseInt(params.studentID),
    cashierID: parseInt(user.userID._id),
    amount: 0,
    item: "",
    date: new Date().toISOString(),
    year: 0,
    semester: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function getStudent() {
      const response = await fetch(
        `http://localhost:5050/student/${params.studentID}`
      );
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const students = await response.json();
      updateStudent(students);
    }
    getStudent();

    async function getTransactions() {
      const response = await fetch(`http://localhost:5050/transaction/`);
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        console.error(message);
        return;
      }

      const transactions = await response.json();
      updatePrevTransaction(transactions);
    }
    getTransactions();
  }, [student.length, prevTransaction.length]);

  function updateStudent(data) {
    setStudent(data);
  }

  function updatePrevTransaction(data) {
    setPrevTransaction(data);
  }

  const handleChange = (e) =>
    setTransaction((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = { ...transaction };
    try {
      const response = await fetch(`http://localhost:5050/transaction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occured with your fetch operation: ", error);
    } finally {
      navigate("/studentrecords");
    }
  }

  return (
    <div className="new-transaction-container">
      <NewTransactionHeader />
      <div className="new-transaction-main-content">
        <div className="dropdown">
          <div className="student-info">
            <div className="student-name">
              {student.lastname}, {student.firstname} {student.middleinitial}
            </div>
            <div className="student-id">Student ID: {student._id}</div>
          </div>
          <form className="select" onSubmit={handleSubmit}>
            <label htmlFor="exam">Type of Exam</label>
            <div>
              <input
                type="radio"
                name="item"
                value="1st Periodic"
                id="firstperiodic"
                checked={transaction.item === "1st Periodic"}
                onChange={handleChange}
              />
              <label htmlFor="firstperiodic"> First Periodic </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="Prelim"
                id="prelim"
                checked={transaction.item === "Prelim"}
                onChange={handleChange}
              />
              <label htmlFor="prelim"> Prelim </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="2nd Periodic"
                id="secondperiodic"
                checked={transaction.item === "2nd Periodic"}
                onChange={handleChange}
              />
              <label htmlFor="secondperiodic"> Second Periodic Exam </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="Midterm"
                id="midterm"
                checked={transaction.item === "Midterm"}
                onChange={handleChange}
              />
              <label htmlFor="midterm"> Midterm </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="3rd Periodic"
                id="thirdperiodic"
                checked={transaction.item === "3rd Periodic"}
                onChange={handleChange}
              />
              <label htmlFor="thirdperiodic"> Third Periodic Exam </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="Prefinals"
                id="prefinals"
                checked={transaction.item === "Prefinals"}
                onChange={handleChange}
              />
              <label htmlFor="prefinals"> Prefinals</label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="4th Periodic"
                id="fourthperiodic"
                checked={transaction.item === "4th Periodic"}
                onChange={handleChange}
              />
              <label htmlFor="fourthperiodic"> Fourth Periodic Exam </label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                value="Finals"
                id="finals"
                checked={transaction.item === "Finals"}
                onChange={handleChange}
              />
              <label htmlFor="finals"> Finals </label>
            </div>
            <div>
              <label htmlFor="amount">Amount </label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="1"
                max="1500"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              onClick={() =>
                setTransaction((prev) => ({
                  ...prev,
                  year: student.yearlevel,
                  semester: student.semester,
                  _id: prevTransaction[prevTransaction.length - 1]._id + 1,
                  amount: parseInt(prev.amount),
                  year: parseInt(prev.year),
                  semester: parseInt(prev.semester),
                }))
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;
