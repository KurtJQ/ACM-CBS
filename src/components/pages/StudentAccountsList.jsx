import { useEffect, useState } from "react";

const Student = (props) => (
  <tr key={props.student.studentID}>
    <td>{props.student.studentid}</td>
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
          props.deleteStudent(props.student._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function StudentAccountList() {
  const [students, setStudents] = useState([]);

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
  }

  function studentList() {
    return students.map((students) => {
      return (
        <Student
          student={students}
          deleteStudent={() => deleteStudent(students._id)}
          key={students._id}
        />
      );
    });
  }

  return <tbody>{studentList()}</tbody>;
}

// function StudentAccountsList(props) {
//   return (
//     <div className="studentaccount-items" id={props.studentid}>
//       <div className="last-name">{props.lastname}</div>
//       <div className="first-name">{props.firstname}</div>
//       <div className="middle-name">{props.middlename}</div>
//       <div className="studentID">{props.studentid}</div>
//       <div className="email">{props.email}</div>
//       <div className="password">{props.password}</div>
//       <div className="contactnum">{props.contactnum}</div>
//       <div className="buttons">
//         <button>Edit</button>
//         <button>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default StudentAccountsList;
