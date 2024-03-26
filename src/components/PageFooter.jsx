import { Link } from "react-router-dom";
import "./pagefooter.css";

function PageFooter() {
  return (
    <footer>
      <p>
        <Link to="login">
          <img src="images\logout-icon.png"></img>
        </Link>
      </p>
    </footer>
  );
}

export default PageFooter;
