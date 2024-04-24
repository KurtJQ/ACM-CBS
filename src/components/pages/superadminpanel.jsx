import { useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminList from "../SuperAdminList";

function SuperAdminHeader() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="images\arrow-back-regular-48.png" alt="back button" />
        </Link>
        <h2>S U P E R A D M I N P A N E L</h2>
      </div>
    </>
  );
}

function SuperAdminPanel() {
  const [admins, setAdmins] = useState(data);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const openEditModal = (admin) => {
    setSelectedAdmin(admin);
    setEditModalOpen(true);
  };

  const openDeleteModal = (admin) => {
    setSelectedAdmin(admin);
    setDeleteModalOpen(true);
  };

  const handleEdit = () => {
    const updatedAdmins = admins.map((admin) =>
      admin.cashierID === selectedAdmin.cashierID ? selectedAdmin : admin
    );
    setAdmins(updatedAdmins);
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    const updatedAdmins = admins.filter(
      (admin) => admin.cashierID !== selectedAdmin.cashierID
    );
    setAdmins(updatedAdmins);
    setDeleteModalOpen(false);
  };

  return (
    <div className="superadminpanel-container">
      <SuperAdminHeader />
      <div className="superadmin-main-content">
        <div className="superadmin-header">
          <label htmlFor="query" hidden>
            Search
          </label>
          <input type="text" name="query" placeholder="Search..." />
          <Link to="newadmin">
            <button>Add New Account</button>
          </Link>
        </div>
        <div className="adminlist">
          <SuperAdminList />
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="edit-admin-account-modal">
          <div className="edit-admin-account-modal-content">
            <div className="edit-admin-account-close-container">
              <button
                className="edit-admin-account-close"
                onClick={() => setEditModalOpen(null)}
              >
                &times;
              </button>
            </div>
            <div className="edit-admin-form">
              <div>
                <label htmlFor="edit-lastname">Last Name:</label>
                <input
                  type="text"
                  id="edit-lastname"
                  value={selectedAdmin.last_name}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      last_name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-firstname">First Name:</label>
                <input
                  type="text"
                  id="edit-firstname"
                  value={selectedAdmin.first_name}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      first_name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-middlename">Middle Name:</label>
                <input
                  type="text"
                  id="edit-middlename"
                  value={selectedAdmin.middle_name}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      middle_name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-cashierid">Cashier ID:</label>
                <input
                  type="text"
                  id="edit-cashierid"
                  value={selectedAdmin.cashierID}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      cashierID: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-email">Email:</label>
                <input
                  type="email"
                  id="edit-email"
                  value={selectedAdmin.email}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-password">Password:</label>
                <input
                  type="password"
                  id="edit-password"
                  value={selectedAdmin.password}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-contactnum">Contact Number:</label>
                <input
                  type="text"
                  id="edit-contactnum"
                  value={selectedAdmin.contactnum}
                  onChange={(e) =>
                    setSelectedAdmin((prevState) => ({
                      ...prevState,
                      contactnum: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <button className="save-button" onClick={handleEdit}>
              Save
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="delete-admin-account-modal">
          <div className="delete-admin-account-modal-content">
            <p>Are you sure you want to delete this admin?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setDeleteModalOpen(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuperAdminPanel;
