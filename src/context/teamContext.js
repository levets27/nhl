import React from "react";

export const TeamsContext = React.createContext();

class TeamsProvider extends React.Component {
  state = {
    id: 1,
    team: []
  };
  componentDidUpdate() {
    if (this.state.id !== null) {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${
          this.state.id
        }?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`
      )
        .then(results => {
          return results.json();
        })
        .then(data => {
          console.log(data);
          /* let team = data.team.sort(function(a, b, i) {
            return (
              teams[0].franchise.roster.roster.person[i].stats.splits.stat
                .points -
              teams[0].franchise.roster.roster.person[i].stats.splits.stat
                .points
            );
          }); */
          this.setState({ team: team });
        });
    }
  }
  render() {
    return (
      <TeamsContext.Provider value={{ teams: this.state.teams }}>
        {this.props.children}
      </TeamsContext.Provider>
    );
  }
}

const TeamsConsumer = TeamsContext.Consumer;

export { TeamsProvider, TeamsConsumer };
