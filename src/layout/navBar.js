import React from "react";
import { Link } from "react-router-dom";
import TeamsList from "../components/teamsList";

const NavBar = () => {
  return (
    <ul className="Menu">
      <li>
        <Link to="/">Schedule</Link>
      </li>
      <li>
        Teams
        <TeamsList />
      </li>
    </ul>
  );
};

export default NavBar;
