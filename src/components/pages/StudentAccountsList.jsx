import { useEffect, useState } from "react";

const Student = (props) => (
  <>
    <tr key={props.student._id}>
      <td>{props.student.studentID}</td>
      <td>{props.student.firstname}</td>
      <td>{props.student.lastname}</td>
      <td>{props.student.middleinitial}</td>
      <td>{props.student.email}</td>
      <td>{props.student.password}</td>
      <td>{props.student.contactnum}</td>
      <td>
        <button>Edit</button>
        <button
          type="button"
          onClick={() => {
            props.handleDelete(props);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  </>
);

export default function StudentAccountList() {
  const [studentDelete, setStudentDelete] = useState(false);
  const [students, setStudents] = useState([]);

  const handleDelete = (data) => {
    console.log(data);
    setStudentDelete(data);
  };

  useEffect(() => {
    async function getStudents() {
      const response = await fetch("http://localhost:5050/student/");
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
    await fetch(`http://localhost:5050/student/${id}`, {
      method: "DELETE",
    });
    const newStudents = students.filter((el) => el._id !== id);
    setStudents(newStudents);
    setStudentDelete(false);
  }

  function studentList() {
    return students.map((students) => {
      return (
        <Student
          student={students}
          key={students._id}
          deleteStudent={() => deleteStudent(students._id)}
          handleDelete={handleDelete}
        />
      );
    });
  }

  return (
    <>
      <tbody>{studentList()}</tbody>
      {studentDelete && (
        <div className="delete-student-account-modal">
          <div className="delete-student-account-modal-content">
            <p>
              Are you sure you want to delete {studentDelete.student.firstname}{" "}
              {studentDelete.student.lastname}?
            </p>
            <div className="delete-button-container">
              <button
                onClick={() =>
                  studentDelete.deleteStudent(studentDelete.student._id)
                }
              >
                Delete
              </button>
              <button onClick={() => studentDelete.handleDelete(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
