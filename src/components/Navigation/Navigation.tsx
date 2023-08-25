import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
