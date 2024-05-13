import { useState, useEffect } from "react";

const Admins = (props) => (
  <div className="superadmin-items" id={props.admin._id}>
    <div className="last-name">{props.admin.lastname}</div>
    <div className="first-name">{props.admin.firstname}</div>
    <div className="middle-name">{props.admin.middleinitial}</div>
    <div className="cashier-id">{props.admin._id}</div>
    <div className="email">{props.admin.email}</div>
    <div className="password">{props.admin.password}</div>
    <div className="contact#">{props.admin.contactnum}</div>
    <div className="buttons">
      <button onClick={() => props.popupEdit(props.admin)}>Edit</button>
      <button onClick={() => props.popupDel(props.admin)}>Delete</button>
    </div>
  </div>
);

function SuperAdminList({ searchQuery }) {
  const [popupDel, setPopupDel] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function getAdmins() {
      try {
        const response = await fetch("http://localhost:5050/cashier/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const adminsData = await response.json();
        setAdmins(adminsData);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    }
    getAdmins();
  }, []);

  const filteredAdmins = admins.filter((admin) => {
    if (!searchQuery) {
      return true; // No search query, so all admins should be included
    }
    const fullName = `${admin.firstname} ${admin.lastname}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handlePopupDel = (data) => {
    setPopupDel(data);
  };

  const handlePopupEdit = (data) => {
    setPopupEdit(data);
  };

  const handleChange = (data) => {
    setPopupEdit((prev) => ({
      ...prev,
      [data.target.name]: data.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const person = { ...popupEdit };
    try {
      let response;
      response = await fetch(`http://localhost:5050/cashier/${person._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
    } catch (e) {
      console.error(`An error occured while editing admin ${person._id}: `, e);
    }
    setPopupEdit(false);
  }

  async function deleteAdmin(id) {
    try {
      await fetch(`http://localhost:5050/cashier/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.error(`An error occured while deleting admin ${id}: `, e);
    }
    const newAdmins = admins.filter((el) => el._id !== id);
    setAdmins(newAdmins);
    setPopupDel(false);
  }

  return (
    <>
      {filteredAdmins.map((admin) => (
        <Admins
          key={admin._id}
          admin={admin}
          popupDel={handlePopupDel}
          popupEdit={handlePopupEdit}
        />
      ))}
      {popupEdit && (
        <div className="edit-admin-modal">
          <div className="edit-admin-modal-content">
            <div className="edit-admin-modal-close-container">
              <button
                className="edit-admin-modal-close"
                onClick={() => setPopupEdit(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cashierID">Cashier ID</label>
                <input
                  type="text"
                  name="cashierID"
                  value={popupEdit._id}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={popupEdit.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={popupEdit.lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="middleinitial">Middle Initial</label>
                <input
                  type="text"
                  name="middleinitial"
                  value={popupEdit.middleinitial}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={popupEdit.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  value={popupEdit.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactnum">Contact Number</label>
                <input
                  type="text"
                  name="contactnum"
                  value={popupEdit.contactnum}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      {popupDel && (
        <div className="delete-student-account-modal">
          <div className="delete-student-account-modal-content">
            <p>
              Are you sure you want to delete {popupDel.firstname}{" "}
              {popupDel.lastname}?
            </p>
            <div className="delete-button-container">
              <button onClick={() => deleteAdmin(popupDel._id)}>Delete</button>
              <button onClick={() => handlePopupDel(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SuperAdminList;
