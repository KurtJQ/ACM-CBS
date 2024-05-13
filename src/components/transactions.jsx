import { useEffect, useState } from "react";

function Transactions(props) {
  const [transactions, setTransactions] = useState([]);
  const [popupDel, setPopupDel] = useState(false);

  function handleDel(data) {
    setPopupDel(data);
  }

  useEffect(() => {
    async function getTransactions(id) {
      const response = await fetch(`http://localhost:5050/transaction/${id}`);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const transactions = await response.json();
      setTransactions(transactions);
    }
    getTransactions(props.studentID);
  }, [transactions.length]);

  function populateTransactions() {
    return transactions.map((transactions) => {
      return (
        <div
          className="items-student-transactions"
          id={transactions._id}
          key={transactions._id}
        >
          <div className="top-info-student-transaction">
            <div className="date">
              {new Date(transactions.date).toLocaleDateString()}
            </div>
            <div>{transactions.item} Exam</div>
            <div>{transactions.amount} PHP</div>
          </div>
          <div className="bottom-info-student-transaction">
            <button>Edit</button>
            <button onClick={() => handleDel(transactions)}>Delete</button>
          </div>
        </div>
      );
    });
  }
  return <>{populateTransactions()}</>;
}

export default Transactions;
