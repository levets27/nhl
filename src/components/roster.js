import React from "react";

class Roster extends React.Component {
  state = {
    roster: [],
    id: this.props.id
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevState.id && this.props.id !== prevProps.id) {
      fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${
          this.props.id
        }?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`
      )
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ roster: data.teams[0].franchise.roster.roster });
        });
    }
  }
  render() {
    const { roster } = this.state;
    if (roster.length > 0) {
      return (
        <table>
          <thead>
            <tr>
              <th />
              <th>First</th>
              <th>Last</th>
              <th>#</th>
              <th>Pos</th>
              <th>GP</th>
              <th>G</th>
              <th>A</th>
              <th>Pts</th>
              <th>PIM</th>
            </tr>
          </thead>
          <tbody>
            {roster
              .filter(
                player =>
                  player.position.abbreviation !== "G" &&
                  player.person.stats[0].splits[0]
              )
              .sort(
                (a, b) =>
                  Number(b.person.stats[0].splits[0].stat.points) -
                  Number(a.person.stats[0].splits[0].stat.points)
              )
              .map((player, i) => {
                const stats = player.person.stats[0].splits[0].stat;
                return (
                  <tr key={i}>
                    <td>
                      <img
                        src={`https://nhl.bamcontent.com/images/headshots/current/168x168/${
                          player.person.id
                        }.jpg`}
                        width="30"
                        height="30"
                        alt=""
                      />
                    </td>
                    <td>{player.person.firstName}</td>
                    <td>{player.person.lastName}</td>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.position.abbreviation}</td>
                    <td>{stats.games}</td>
                    <td>{stats.goals}</td>
                    <td>{stats.assists}</td>
                    <td>{stats.points}</td>
                    <td>{stats.pim}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      );
    }
    return null;
  }
}

export default Roster;
