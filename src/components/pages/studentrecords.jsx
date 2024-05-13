import StudentList from "../StudentRecordsList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="query" hidden>
        Search
      </label>
      <input
        type="text"
        name="query"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getStudents() {
      try {
        const response = await fetch("http://localhost:5050/student/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const studentsData = await response.json();
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
    getStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    if (!searchQuery) {
      return true; // No search query, so all students should be included
    }
    const fullName = `${student.firstname} ${student.lastname}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  

  return (
    <div className="studentrecords-container">
      <StudentRecordsHeader />
      <div className="main-content">
        <div className="left-side">
          <SearchBar setSearchQuery={setSearchQuery} />
          <div className="statistics">
            <div>Number of registered Students:</div>
            <div>{filteredStudents.length}</div>
          </div>
        </div>
        <div className="list">
          {filteredStudents.map((student) => (
            <StudentList key={student._id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentRecords;
