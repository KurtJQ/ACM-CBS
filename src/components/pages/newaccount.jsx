import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewAccountHeader() {
  return (
    <div className="new-account-header">
      <Link to="/studentaccounts">
        <img src="images\arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

export default function NewAccount() {
  const [form, setForm] = useState({
    _id: addStudentID(),
    firstname: "",
    lastname: "",
    middleinitial: "",
    email: "",
    password: "",
    contactnum: "",
    yearlevel: "",
    semester: "",
    course: "",
    typeofstudent: "New",
    exams: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
    cashierID: [],
    payments: [],
    item: [],
  });
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getStudents() {
      const response = await fetch("http://localhost:5050/student/");
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const students = await response.json();
      setStudent(students);
    }
    getStudents();
    return;
  }, [student.length]);

  function addStudentID() {}

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    console.log(person);
    try {
      let response;
      response = await fetch("http://localhost:5050/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occured with your fetch operation: ", error);
    } finally {
      navigate("/studentaccounts");
    }
  }

  return (
    <div className="new-account-container">
      <NewAccountHeader />
      <div className="new-account-main-content">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                required
                value={form.firstname}
                onChange={(e) => updateForm({ firstname: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                required
                value={form.lastname}
                onChange={(e) => updateForm({ lastname: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="middleinitial">Middle Initial</label>
              <input
                type="text"
                name="middleinitial"
                required
                value={form.middleinitial}
                onChange={(e) => updateForm({ middleinitial: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                required
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contactnum">Contact Number</label>
              <input
                type="text"
                name="contactnum"
                required
                value={form.contactnum}
                onChange={(e) => updateForm({ contactnum: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="yearlevel">Year Level</label>
              <input
                type="text"
                name="yearlevel"
                required
                value={form.yearlevel}
                onChange={(e) => updateForm({ yearlevel: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="semester">Semester</label>
              <input
                type="text"
                name="semester"
                required
                value={form.semester}
                onChange={(e) => updateForm({ semester: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="course">Course</label>
              <input
                type="text"
                name="course"
                required
                value={form.course}
                onChange={(e) => updateForm({ course: e.target.value })}
              />
            </div>
            <div>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
