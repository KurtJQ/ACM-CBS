import { Link } from "react-router-dom";
import "./pagefooter.css";

function PageFooter() {
  return (
    <footer>
      <Link to="login">
        <p>
          Log out Account
          <img className="logout-icon" src="images\logout-icon.png"></img>
        </p>
      </Link>
    </footer>
  );
}

export default PageFooter;
