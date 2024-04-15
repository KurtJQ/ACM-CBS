import { useState } from "react";
import "./StudentRecordsList.css";
import { Link } from "react-router-dom";

function StudentList(props) {
  const [toggle, setToggle] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedData, setEditedData] = useState({
    date: props.date,
    exam: props.exam,
    amount: props.amount
  });

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleEditSubmit = () => {
    // Apply the edited data to the record shown on the page
    console.log("Edited data:", editedData);

    // Close the modal
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    // Implement logic for deleting student record
    console.log("Deleting student record:", props.studentid);
    setShowDeleteModal(false);
  };

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
              to={`${props.studentid}/newtransaction`}
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
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Edit form */}
            <label>Date:</label>
            <input
              type="date"
              value={editedData.date}
              onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
            />
            <label>Exam:</label>
            <input
              type="text"
              value={editedData.exam}
              onChange={(e) => setEditedData({ ...editedData, exam: e.target.value })}
            />
            <label>Amount:</label>
            <input
              type="number"
              value={editedData.amount}
              onChange={(e) => setEditedData({ ...editedData, amount: e.target.value })}
            />
            <button onClick={handleEditSubmit}>Save</button>
            <button onClick={handleEditModalClose}>Cancel</button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Delete confirmation */}
            <p>Are you sure you want to delete this record?</p>
            <button onClick={handleDeleteConfirm}>Yes</button>
            <button onClick={handleDeleteModalClose}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;