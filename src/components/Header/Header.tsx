import logo from "../../assets/logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="nav-bar">
      <img
        src={logo}
        alt="Robots app logo"
        className="nav-bar__logo"
        width={40}
        height={40}
      />
      <Navigation />
    </header>
  );
};

export default Header;
