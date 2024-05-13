import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewAdminHeader() {
  return (
    <div className="new-admin-header">
      <Link to="/superadminpanel">
        <img src="images\arrow-back-regular-48.png" alt="back button" />
      </Link>
    </div>
  );
}

function NewAdmin() {
  const [cashier, setCashier] = useState([]);
  useEffect(() => {
    async function getCashier() {
      const response = await fetch(
        "https://acm-cbs-server.vercel.app/cashier/"
      );
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const cashiers = await response.json();
      setCashier(cashiers);
    }
    getCashier();
    return;
  }, [cashier.length]);

  const [form, setForm] = useState({
    _id: 0,
    firsname: "",
    lastname: "",
    middleinitial: "",
    email: "",
    password: "",
    contactnum: "",
    access_level: "admin",
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      let response;
      response = await fetch("https://acm-cbs-server.vercel.app/cashier/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (e) {
      console.error("A problem occured with your fetch operation: ", e);
    } finally {
      navigate("/superadminpanel");
    }
  }

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <div className="new-admin-container">
      <NewAdminHeader />
      <div className="new-admin-main-content">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cashierID">Cashier ID</label>
              <input
                type="number"
                name="_id"
                onChange={(e) => {
                  updateForm({ firstname: parseInt(e.target.value) });
                }}
              />
            </div>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={(e) => {
                  updateForm({ firstname: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={(e) => {
                  updateForm({ lastname: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="middleinitial">Middle Initial</label>
              <input
                type="text"
                name="middleinitial"
                onChange={(e) => {
                  updateForm({ middleinitial: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={(e) => {
                  updateForm({ email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  updateForm({ password: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="contactnumber">Contact Number</label>
              <input
                type="text"
                name="contactnumber"
                onChange={(e) => {
                  updateForm({ contactnum: e.target.value });
                }}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAdmin;
