import "./SuperAdminList.css";

function SuperAdminList(props) {
  return (
    <div className="superadmin-items" id={props.cashierid}>
      <div className="last-name">{props.lastname}</div>
      <div className="first-name">{props.firstname}</div>
      <div className="middle-name">{props.middleinitial}</div>
      <div className="cashier-id">{props.cashierid}</div>
      <div className="email">{props.email}</div>
      <div className="password">{props.password}</div>
      <div className="contact#">{props.contactnum}</div>
      <div className="buttons">
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default SuperAdminList;
