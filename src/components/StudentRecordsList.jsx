import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transactions from "./transactions";

function StudentList(props) {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTransactions(id) {
      try {
        const response = await fetch(
          `https://acm-cbs-server.vercel.app/transaction/list/${id}`
        );
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          console.error(message);
          return;
        }
        const transactions = await response.json();
        setTransactions(transactions);
      } catch (e) {
        console.warn("An error occured while fetching data: ", e);
      }
    }
    getTransactions(props.student._id);
  }, [transactions.length]);

  function getTotal(item) {
    let payment = 1500;
    let total = 0;
    for (let i in transactions) {
      if (transactions[i].item == item) {
        total = total + transactions[i].amount;
      }
      if (total >= 1500) {
        return 0;
      }
    }
    return payment - total;
  }
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
              1st Periodic Exam <span>{getTotal("1st Periodic") + " PHP"}</span>
            </div>
            <div className="prelim">
              Prelim <span>{getTotal("Prelim") + " PHP"}</span>
            </div>
            <div className="secondperiodic">
              2nd Periodic Exam <span>{getTotal("2nd Periodic") + " PHP"}</span>
            </div>
            <div className="midterm">
              Midterm <span>{getTotal("Midterm") + " PHP"}</span>
            </div>
            <div className="thirdperiodic">
              3rd Periodic Exam <span>{getTotal("3rd Periodic") + " PHP"}</span>
            </div>
            <div className="prefinals">
              Pre-Finals <span>{getTotal("Prefinals") + " PHP"}</span>
            </div>
            <div className="fourthperiodic">
              4th Periodic Exam <span>{getTotal("4th Periodic") + " PHP"}</span>
            </div>
            <div className="finals">
              Finals <span>{getTotal("Finals") + " PHP"}</span>
            </div>
          </div>
          {/* This is where listTransactions will take place */}
          <div className="payment-records">
            <div className="payment-records-header">Previous Transactions</div>
            <div className="student-transactions">
              <Transactions listTransactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
