import "./pagefooter.css";
import { useLogout } from "../hooks/useLogout";

function PageFooter() {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <footer>
      <div>
        <button onClick={handleClick}>
          Log out Account
          <img className="logout-icon" src="images\logout-icon.png"></img>
        </button>
      </div>
    </footer>
  );
}

export default PageFooter;
