import { useEffect, useState } from "react";

function Transactions(props) {
  const [transactions, setTransactions] = useState([]);
  const [popupDel, setPopupDel] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);

  function handlePopupDel(data) {
    setPopupDel(data);
  }

  function handleEdit(data) {
    setPopupEdit(data);
  }

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
    getTransactions(props.studentID);
  }, [transactions.length]);

  async function deleteTransaction(id) {
    try {
      await fetch(`https://acm-cbs-server.vercel.app/transaction/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.error(`An error occured while doing delete operation: `, e);
    }
    const newTransactions = transactions.filter((el) => el._id !== id);
    setTransactions(newTransactions);
    setPopupDel(false);
  }

  const handleChange = (data) => {
    setPopupEdit((prev) => ({
      ...prev,
      [data.target.name]: data.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const transaction = { ...popupEdit };
    try {
      const response = await fetch(
        `https://acm-cbs-server.vercel.app/transaction/${transaction._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        }
      );
    } catch (e) {
      console.error(`An error occured while editing transaction `, e);
    }
  }

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
            <button onClick={() => handleEdit(transactions)}>Edit</button>
            <button onClick={() => handlePopupDel(transactions)}>Delete</button>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      {popupDel && (
        <div className="delete-student-account-modal">
          <div className="delete-student-account-modal-content">
            <p>Are you sure you want to delete this transaction?</p>
            <div className="delete-button-container">
              <button onClick={() => deleteTransaction(popupDel._id)}>
                Delete
              </button>
              <button onClick={() => handlePopupDel(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {popupEdit && (
        <div className="edit-admin-modal">
          <div className="edit-admin-modal-content">
            <div className="edit-admin-modal-close-container">
              <button
                className="edit-admin-modal-close"
                onClick={() => setPopupEdit(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentID">Student ID</label>
                <input
                  type="text"
                  name="cashierID"
                  value={popupEdit.studentID}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="cashierID">Cashier ID</label>
                <input
                  type="text"
                  name="cashierID"
                  value={popupEdit._id}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="item">Type of Exam</label>
                <select name="item" id="item" onChange={handleChange}>
                  <option value="1st Periodic">1st Periodic</option>
                  <option value="Prelim">Prelim</option>
                  <option value="2nd Periodic">2nd Periodic</option>
                  <option value="Midterm">Midterm</option>
                  <option value="3rd Periodic">3rd Periodic</option>
                  <option value="Prefinals">Prefinals</option>
                  <option value="4th Periodic">4th Periodic</option>
                  <option value="Finals">Finals</option>
                </select>
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={popupEdit.amount}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="year">Year Level</label>
                <input
                  type="number"
                  name="year"
                  value={popupEdit.year}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="year">Semester</label>
                <input
                  type="number"
                  name="Semester"
                  value={popupEdit.semester}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                onClick={() =>
                  setPopupEdit((prev) => ({
                    ...prev,
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
      )}
      {populateTransactions()}
    </>
  );
}

export default Transactions;
