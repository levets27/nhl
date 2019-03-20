import React from "react";
import { Link } from "react-router-dom";
import { TeamsConsumer } from "../context/teamsContext";

class TeamsList extends React.Component {
  render() {
    return (
      <TeamsConsumer>
        {({ teams }) => (
          <ul className="TeamsList">
            {teams.map(({ name, id }) => (
              <li key={id}>
                <Link to={`/teams/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </TeamsConsumer>
    );
  }
}

export default TeamsList;
