import { render } from "react-dom";
import "./studentrecords.css";
import StudentList from "../StudentRecordsList";
import list from "../SAMPLE_DATA.json";

function StudentRecordsHeader() {
  return (
    <div className="header">
      <h2>S T U D E N T R E C O R D S</h2>
    </div>
  );
}

function SearchBar() {
  return <div className="search-bar">search bar</div>;
}

function StudentRecords() {
  return (
    <div className="container">
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
