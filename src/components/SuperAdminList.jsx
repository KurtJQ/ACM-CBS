import "./SuperAdminList.css";

function AdminList(props) {
  return (
    <div className="superadmin-items" id={props.cashierid}>
      <div className="last-name">{props.lastname}</div>
      <div className="first-name">{props.firstname}</div>
      <div className="middle-name">{props.middlename}</div>
      <div className="cashier-id">{props.cashierid}</div>
      <div className="email">{props.email}</div>
      <div className="password">{props.password}</div>
      <div className="contact#">{props.contactnum}</div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default AdminList;
