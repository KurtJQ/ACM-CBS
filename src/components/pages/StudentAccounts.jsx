import { Link } from "react-router-dom";
import StudentAccountList from "./StudentAccountsList.jsx";

function StudentAccountsHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S T U D E N T A C C O U N T S</h2>
      </div>
    </>
  );
}

function StudentAccounts() {
  const [editStudent, setEditStudent] = useState(null);
  const [deleteStudent, setDeleteStudent] = useState(null);

  const handleEdit = (student) => {
    setEditStudent(student);
  };

  const handleDelete = (student) => {
    setDeleteStudent(student);
  };

  const handleEditFormSubmit = (editedStudent) => {
    // Handle form submission for editing student
    console.log("Edited student data:", editedStudent);
    setEditStudent(null);
  };

  const handleDeleteConfirm = (student) => {
    // Handle deletion confirmation
    console.log("Deleting student:", student);
    // Perform deletion logic here
    setDeleteStudent(null);
  };

  return (
    <div className="studentaccounts-container">
      <StudentAccountsHeader />
      <div className="studentaccounts-main-content">
        <div className="studentaccounts-header">
          <label htmlFor="query" hidden>
            Search
          </label>
          <input type="text" name="query" placeholder="Search..." />
          <Link to={"new-student"}>
            <button>Add New Account</button>
          </Link>
        </div>
        <table className="studentaccountslist">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <StudentAccountList />
        </table>
      </div>
      {editStudent && (
        <div className="edit-student-account-modal">
          <div className="edit-student-account-modal-content">
            <div className="edit-student-account-close-container">
              <button
                className="edit-student-account-close"
                onClick={() => setEditStudent(null)}
              >
                &times;
              </button>
            </div>
            {/* Edit form with inputs prefilled with student data */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditFormSubmit(editStudent);
              }}
            >
              <label>
                Student ID:
                <input type="text" value={editStudent.student_id} readOnly />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  value={editStudent.first_name}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      first_name: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={editStudent.last_name}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      last_name: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Middle Name:
                <input
                  type="text"
                  value={editStudent.middle_name}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      middle_name: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={editStudent.email}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, email: e.target.value })
                  }
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={editStudent.password}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, password: e.target.value })
                  }
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  value={editStudent.contactnum}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      contactnum: e.target.value,
                    })
                  }
                />
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
      {deleteStudent && (
        <div className="delete-student-account-modal">
          <div className="delete-student-account-modal-content">
            <p>
              Are you sure you want to delete {deleteStudent.first_name}{" "}
              {deleteStudent.last_name}?
            </p>
            <div className="delete-button-container">
              <button onClick={() => handleDeleteConfirm(deleteStudent)}>
                Delete
              </button>
              <button onClick={() => setDeleteStudent(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentAccounts;
