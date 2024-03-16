import PageHeader from "./components/PageHeader";

function App() {
  return (
    <div>
      <header className="header">
      <PageHeader />
      </header>
      
      <div className='dashboard'>
        <h2>DASHBOARD</h2>
        <div className='buttons'>
        <div class="button-container">
          <button class="button" onclick="goToStudentRecords()">Student Records</button>
          <button class="button" onclick="goToStudentAccounts()">Student Accounts</button>
          <button class="button" onclick="goToSuperAdminPanel()">Super Admin Panel</button>
        </div>

        <footer>
        <p>Log Out Account</p>
        
        </footer>
        
        </div>
      </div>
    </div>
  );
}

export default App;
