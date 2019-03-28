import React from "react";
import { TeamsContext } from "../context/teamsContext";
import StatTableContainer from "./statTableContainer";

class TeamPage extends React.Component {
  state = {
    abbr: "",
    id: null,
    team: []
  };
  componentDidMount() {
    this.updateAbbr();
  }
  componentDidUpdate() {
    this.updateAbbr();
    this.updateTeam();
  }
  updateTeam = () => {
    if (this.context.teams.length > 0) {
      if (this.state.team && this.state.team.abbreviation !== this.state.abbr) {
        let newTeam = this.context.teams.find(
          ({ abbreviation }) => abbreviation === this.state.abbr
        );
        if (this.state.team !== newTeam) {
          this.setState({ team: newTeam, id: newTeam.id });
        }
      }
    }
  };
  updateAbbr = () => {
    let teamAbbr = this.props.match.params.abbr;
    if (this.state.abbr === "" || this.state.abbr !== teamAbbr) {
      this.setState({ abbr: teamAbbr });
    }
  };
  render() {
    const skaterStatCategories = {
      games: "GP",
      goals: "G",
      assists: "A",
      points: "PTS",
      pim: "PIM"
    };
    const goalieStatCategories = {
      games: "GP",
      gamesStarted: "GS",
      wins: "W",
      losses: "L",
      ot: "OTL",
      goalAgainstAverage: "GAA",
      savePercentage: "SV%",
      shutouts: "SO"
    };
    return (
      <div>
        {this.state.id && (
          <React.Fragment>
            <h1>
              <img
                src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${
                  this.state.id
                }.svg`}
                width="60"
                height="60"
                alt=""
              />
              {this.state.team.name}
            </h1>
            <section>
              <h2>Skater Stats</h2>
              <StatTableContainer
                id={this.state.id}
                name={`teamSkaterStats-${this.state.abbr}`}
                apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${
                  this.state.id
                }?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
                sortKey="points"
                statCategories={skaterStatCategories}
              />
            </section>
            <section>
              <h2>Goalie Stats</h2>
              <StatTableContainer
                id={this.state.id}
                name={`teamGoalieStats-${this.state.abbr}`}
                apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${
                  this.state.id
                }?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
                isGoalie
                sortKey="goalAgainstAverage"
                statCategories={goalieStatCategories}
              />
            </section>
          </React.Fragment>
        )}
      </div>
    );
  }
}
TeamPage.contextType = TeamsContext;

export default TeamPage;
