import "./NavBar.scss";
import menuIcon from "../../assets/images/menu-icon.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__item">🛵fast</h1>
      <img className="nav__item" src={menuIcon} alt="Menu" />
    </nav>
  );
};

export default NavBar;
