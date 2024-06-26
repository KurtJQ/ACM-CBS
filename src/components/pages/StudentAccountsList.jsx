import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Student = (props) => (
  <>
    <tr key={props.student._id}>
      <td>{props.student._id}</td>
      <td>{props.student.firstname}</td>
      <td>{props.student.lastname}</td>
      <td>{props.student.middleinitial}</td>
      <td>{props.student.email}</td>
      <td>{props.student.password}</td>
      <td>{props.student.contactnum}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            props.handleEdit(props.student);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            props.handleDelete(props.student);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  </>
);

export default function StudentAccountList({ searchQuery }) {
  const [studentEdit, setStudentEdit] = useState(false);
  const [studentDelete, setStudentDelete] = useState(false);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const person = { ...studentEdit };
    try {
      let response;
      response = await fetch(
        `https://acm-cbs-server.vercel.app/student/${person._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        }
      );
    } catch (e) {
      console.error(
        `A problem has occured while editing student "${person._id}": `,
        e
      );
    } finally {
      setStudentEdit(false);
      navigate(0);
    }
  }

  const handleEdit = (data) => {
    setStudentEdit(data);
  };

  const handleDelete = (data) => {
    setStudentDelete(data);
  };

  useEffect(() => {
    async function getStudents() {
      const response = await fetch(
        "https://acm-cbs-server.vercel.app/student/"
      );
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const students = await response.json();
      setStudents(students);
    }
    getStudents();
    return;
  }, [students.length]);

  async function deleteStudent(id) {
    try {
      await fetch(`https://acm-cbs-server.vercel.app/student/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.warn(`A problem occured while deleting account ${id}: `, e);
    }
    const newStudents = students.filter((el) => el._id !== id);
    setStudents(newStudents);
    setStudentDelete(false);
  }

  function filterStudents() {
    if (!searchQuery) {
      return students;
    } else {
      return students.filter((student) => {
        const fullName =
          `${student.firstname} ${student.lastname}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase());
      });
    }
  }

  function studentList() {
    const filteredStudents = filterStudents();
    return filteredStudents.map((student) => (
      <Student
        student={student}
        key={student._id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    ));
  }

  return (
    <>
      <tbody>{studentList()}</tbody>
      {studentEdit && (
        <div className="edit-student-account-modal">
          <div className="edit-student-account-modal-content">
            <div className="edit-student-account-close-container">
              <button
                className="edit-student-account-close"
                onClick={() => setStudentEdit(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Student ID:
                <input type="text" value={studentEdit._id} readOnly />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  value={studentEdit.firstname}
                  onChange={(e) =>
                    setStudentEdit({
                      ...studentEdit,
                      firstname: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={studentEdit.lastname}
                  onChange={(e) =>
                    setStudentEdit({
                      ...studentEdit,
                      lastname: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Middle Name:
                <input
                  type="text"
                  value={studentEdit.middleinitial}
                  onChange={(e) =>
                    setStudentEdit({
                      ...studentEdit,
                      middleinitial: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={studentEdit.email}
                  onChange={(e) =>
                    setStudentEdit({ ...studentEdit, email: e.target.value })
                  }
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={studentEdit.password}
                  onChange={(e) =>
                    setStudentEdit({ ...studentEdit, password: e.target.value })
                  }
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  value={studentEdit.contactnum}
                  onChange={(e) =>
                    setStudentEdit({
                      ...studentEdit,
                      contactnum: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Type of Student:
                <input
                  type="radio"
                  name="typeofstudent"
                  value="New"
                  checked={studentEdit.typeofstudent === "New"}
                  onChange={(e) => {
                    setStudentEdit({
                      ...studentEdit,
                      typeofstudent: e.target.value,
                    });
                  }}
                />
                New
                <input
                  type="radio"
                  name="typeofstudent"
                  value="Old"
                  checked={studentEdit.typeofstudent === "Old"}
                  onChange={(e) => {
                    setStudentEdit({
                      ...studentEdit,
                      typeofstudent: e.target.value,
                    });
                  }}
                />
                Old
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
      {studentDelete && (
        <div className="delete-student-account-modal">
          <div className="delete-student-account-modal-content">
            <p>
              Are you sure you want to delete {studentDelete.firstname}{" "}
              {studentDelete.lastname}?
            </p>
            <div className="delete-button-container">
              <button onClick={() => deleteStudent(studentDelete._id)}>
                Delete
              </button>
              <button onClick={() => handleDelete(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
