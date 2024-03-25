import { render } from "react-dom";
import "./studentrecords.css";
import StudentList from "../StudentRecordsList";
import list from "../SAMPLE_DATA.json";
import { useState } from "react";
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
        <Link to="/dashboard">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S T U D E N T R E C O R D S</h2>
      </div>
    </>
  );
}

function StudentRecords() {
  return (
    <div className="studentrecords-container">
      <StudentRecordsHeader />
      <div className="main-content">
        <div className="left-side">
          <SearchBar />
          <div className="statistics">
            <div>Number of registered Student's:</div>
            <div>{list.length}</div>
          </div>
        </div>
        <div className="list">
          {list.map((student) => (
            <StudentList
              key={student.student_id}
              studentid={student.student_id}
              firstname={student.first_name}
              lastname={student.last_name}
              middleinitial={student.middle_name}
              firstperiodic={student.exams.firstperiodic}
              prelim={student.exams.prelim}
              secondperiodic={student.exams.secondperiodic}
              midterm={student.exams.midterm}
              thirdperiodic={student.exams.thirdperiodic}
              prefinals={student.exams.prefinals}
              fourthperiodic={student.exams.fourthperiodic}
              finals={student.exams.finals}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentRecords;
