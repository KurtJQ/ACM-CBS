import "./StudentAccounts.css";
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

function StudentAccountsHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="src\assets\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S T U D E N T A C C O U N T S</h2>
      </div>
    </>
  );
}

function StudentAccounts() {
  return (
    <div className="studentaccounts-container">
      <StudentAccountsHeader />
      <div className="main-content">
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default StudentAccounts;
