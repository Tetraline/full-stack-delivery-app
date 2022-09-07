import "./NavBar.scss";
import menuIcon from "../../assets/images/menu-icon.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__item">🛵fast</h1>
      <ToggleSwitch options={["Delivery", "Pick-Up"]} />
    </nav>
  );
};

export default NavBar;
