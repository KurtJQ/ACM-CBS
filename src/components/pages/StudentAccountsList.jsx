import "./pagestyles.css";

function StudentAccountsList(props) {
  return (
    <div className="studentaccount-items" id={props.studentid}>
      <div className="last-name">{props.lastname}</div>
      <div className="first-name">{props.firstname}</div>
      <div className="middle-name">{props.middlename}</div>
      <div className="studentID">{props.studentid}</div>
      <div className="email">{props.email}</div>
      <div className="password">{props.password}</div>
      <div className="contactnum">{props.contactnum}</div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default StudentAccountsList;
