import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/home" className="nav__link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className="nav__link">
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
