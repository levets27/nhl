import React from "react";
import { Link } from "react-router-dom";
import { TeamsConsumer } from "../context/teamsContext";

class TeamsList extends React.Component {
  render() {
    return (
      <TeamsConsumer>
        {({ teams }) => (
          <ul className="TeamsList">
            {teams.map(({ name, id, abbreviation }) => (
              <li key={id}>
                <Link to={`/teams/${abbreviation}`}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </TeamsConsumer>
    );
  }
}

export default TeamsList;
