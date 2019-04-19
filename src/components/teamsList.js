import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../components/title";
import { TeamsConsumer } from "../context/teamsContext";

class TeamsList extends React.Component {
  render() {
    return (
      <TeamsConsumer>
        {({ teams, conferences }) =>
          Object.entries(conferences).map((conference, i) => (
            <section key={i}>
              <Title level={3}>{`${conference[0]} Conference`}</Title>
              <ul>
                {conference[1].map((division, i) => (
                  <Fragment key={i}>
                    <Title level={4}>{division}</Title>
                    {teams
                      .filter(team => team.division.name === division)
                      .map((team, i) => (
                        <li key={i}>
                          <Link to={`${team.abbreviation}`}>{team.name}</Link>
                        </li>
                      ))}
                  </Fragment>
                ))}
              </ul>
            </section>
          ))
        }
      </TeamsConsumer>
    );
  }
}

export default TeamsList;
