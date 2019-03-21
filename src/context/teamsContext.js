import React from "react";

export const TeamsContext = React.createContext();

class TeamsProvider extends React.Component {
  state = {
    teams: []
  };
  componentDidMount() {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let teams = data.teams.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({ teams: teams });
      });
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
