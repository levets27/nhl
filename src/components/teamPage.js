import React from "react";
import { TeamsContext } from "../context/teamsContext";
import Roster from "./roster";

class TeamPage extends React.Component {
  state = {
    id: null,
    team: []
  };
  componentDidMount() {
    this.updateId();
  }
  componentDidUpdate() {
    if (this.context.teams.length > 0) {
      this.updateTeam();
    }
  }
  updateTeam = () => {
    let newTeamId = Number(this.props.match.params.teamId);
    if (this.state.team && this.state.team.id !== newTeamId) {
      let newTeam = this.context.teams.find(
        ({ id }) => id === parseInt(newTeamId)
      );
      this.setState({ team: newTeam });
    }
  };
  updateId = () => {
    let newTeamId = this.props.match.params.teamId;
    if (this.state.id === null || this.state.id !== newTeamId) {
      this.setState({ id: newTeamId });
    }
  };
  render() {
    const { id, team } = this.state;
    return (
      <div>
        <h1>
          {id && (
            <img
              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${id}.svg`}
              width="60"
              height="60"
              alt=""
            />
          )}
          {team.name}
        </h1>
        <Roster id={team.id} />
      </div>
    );
  }
}
TeamPage.contextType = TeamsContext;

export default TeamPage;
