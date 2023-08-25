import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
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
