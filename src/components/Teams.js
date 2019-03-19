import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Team = props => {
  return <div>Team</div>;
};

class Teams extends React.Component {
  state = {
    teams: []
  };
  componentDidMount() {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let teams = data.teams.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
      <ul>
        {this.state.teams.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/teams/${id}`}>{name}</Link>
          </li>
        ))}
        <Route path={`/teams/:teamId`} component={Team} />
      </ul>
    );
  }
}

export default Teams;
