import React from "react";

class Roster extends React.Component {
  state = {
    id: null,
    roster: [],
    skaterData: [],
    goalieData: []
  };
  playerStatCategories = ["games", "goals", "assists", "points", "pim"];
  goalieStatCategories = [
    "games",
    "gamesStarted",
    "wins",
    "losses",
    "ot",
    "goalAgainstAverage",
    "savePercentage",
    "shutouts"
  ];
  componentDidMount() {
    if (this.state.id !== this.props.id) {
      this.setState({ id: this.props.id });
    }
  }
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
          let roster = data.teams[0].franchise.roster.roster;
          let skaterData = this.formatData(roster),
            goalieData = this.formatData(
              roster,
              true,
              this.goalieStatCategories
            );
          this.setState({
            roster: roster,
            skaterData: skaterData,
            goalieData: goalieData
          });
          console.log(this.state);
        });
    }
  }
  formatData = (
    data,
    isGoalie = false,
    desiredStats = this.playerStatCategories
  ) => {
    let filteredData = data
      .filter(player => {
        if (isGoalie) {
          return (
            player.position.abbreviation === "G" &&
            player.person.stats[0].splits[0]
          );
        } else {
          return (
            player.position.abbreviation !== "G" &&
            player.person.stats[0].splits[0]
          );
        }
      })
      .map(player => {
        let { position, person, jerseyNumber } = player;
        let stats = person.stats[0].splits[0].stat;
        let data = {
          id: person.id,
          firstName: person.firstName,
          lastName: person.lastName,
          jerseyNumber,
          position: position.abbreviation
        };
        desiredStats.forEach(stat => {
          data[stat] = stats[stat];
        });
        return data;
      });
    return this.sortData(filteredData);
  };
  sortData = (data, sortKey = "points") =>
    data.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return -1;
      if (a[sortKey] < b[sortKey]) return 1;
      return 0;
    });

  sortStateData = (data, sortKey = "points", state) => {
    let newData = this.sortData(data, sortKey);
    this.setState({ state: newData });
  };

  render() {
    return (
      <>
        <SkaterTable
          skaterData={this.state.skaterData}
          sortFn={this.sortStateData}
        />
        <GoalieStats goalieData={this.state.goalieData} />
      </>
    );
  }
}
const SkaterTable = props => {
  const { skaterData, sortFn } = props;
  return (
    <section>
      <h2>Skater Stats</h2>
      <table>
        <thead>
          <tr>
            <th />
            <th onClick={() => sortFn(skaterData, "firstName", skaterData)}>
              First
            </th>
            <th onClick={() => sortFn(skaterData, "lastName", skaterData)}>
              Last
            </th>
            <th onClick={() => sortFn(skaterData, "jerseyNumber", skaterData)}>
              #
            </th>
            <th onClick={() => sortFn(skaterData, "position", skaterData)}>
              Pos
            </th>
            <th onClick={() => sortFn(skaterData, "games", skaterData)}>GP</th>
            <th onClick={() => sortFn(skaterData, "goals", skaterData)}>G</th>
            <th onClick={() => sortFn(skaterData, "assists", skaterData)}>A</th>
            <th onClick={() => sortFn(skaterData, "points", skaterData)}>
              Pts
            </th>
            <th onClick={() => sortFn(skaterData, "pim", skaterData)}>PIM</th>
          </tr>
        </thead>
        <tbody>
          {skaterData.map((player, i) => {
            return <Row player={player} key={i} />;
          })}
        </tbody>
      </table>
    </section>
  );
};
const GoalieStats = props => {
  const { goalieData } = props;
  return (
    <section>
      <h2>Goalie Stats</h2>
      <table>
        <thead>
          <tr>
            <th />
            <th>First</th>
            <th>Last</th>
            <th>#</th>
            <th>Pos</th>
            <th>GP</th>
            <th>GS</th>
            <th>W</th>
            <th>L</th>
            <th>OTL</th>
            <th>GAA</th>
            <th>SV%</th>
            <th>SO</th>
          </tr>
        </thead>
        <tbody>
          {goalieData.map((player, i) => {
            return <Row player={player} key={i} />;
          })}
        </tbody>
      </table>
    </section>
  );
};
const Row = props => {
  const { player } = props;
  return (
    <tr>
      {Object.values(player).map((playerData, i) => {
        if (i === 0) {
          const size = "40";
          return (
            <td key={i}>
              <img
                src={`https://nhl.bamcontent.com/images/headshots/current/60x60/${playerData}.jpg`}
                alt=""
                height={size}
                width={size}
              />
            </td>
          );
        }
        return <td key={i}>{playerData}</td>;
      })}
    </tr>
  );
};

export default Roster;
