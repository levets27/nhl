import React from "react";
import { TeamsContext } from "../context/teamsContext";
import Roster from "./roster";

class TeamPage extends React.Component {
  state = {
    team: []
  };
  componentDidUpdate() {
    const newTeam = this.context.teams.find(
      ({ id }) => id === parseInt(this.props.match.params.teamId)
    );
    if (newTeam.id !== this.state.team.id) {
      this.setState({ team: newTeam });
    }
  }
  render() {
    const { team } = this.state;
    return (
      <div>
        <h1>
          <img
            src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${
              team.id
            }.svg`}
            width="60"
            height="60"
            alt=""
          />
          {team.name}
        </h1>
        <Roster id={team.id} />
      </div>
    );
  }
}
TeamPage.contextType = TeamsContext;

export default TeamPage;
