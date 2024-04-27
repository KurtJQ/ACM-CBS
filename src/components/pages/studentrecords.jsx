import StudentList from "../StudentRecordsList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState();
  return (
    <div className="searchbar">
      <label htmlFor="query" hidden>
        Search
      </label>
      <input
        type="text"
        name="query"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function StudentRecordsHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S T U D E N T R E C O R D S</h2>
      </div>
    </>
  );
}

function StudentRecords() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await fetch("http://acm-cbs.vercel.app:5050//student/");
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const students = await response.json();
      updateStudents(students);
    }
    getStudents();
    return;
  }, [students.length]);

  function updateStudents(data) {
    setStudents(data);
  }

  return (
    <div className="studentrecords-container">
      <StudentRecordsHeader />
      <div className="main-content">
        <div className="left-side">
          <SearchBar />
          <div className="statistics">
            <div>Number of registered Student's:</div>
            <div>{students.length}</div>
          </div>
        </div>
        <div className="list">
          {students.map((student) => (
            <StudentList key={student._id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentRecords;
