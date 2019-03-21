import React from "react";
import StatTableRow from "./statTableRow";

class StatTable extends React.Component {
  state = {
    id: null,
    roster: [],
    playerData: [],
    sortKey: ""
  };

  componentDidMount() {
    this.updateId();
    if (this.state.sortKey !== this.props.sortKey) {
      this.setState({ sortKey: this.props.sortKey });
    }
    if (this.state.roster.length === 0) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevState.id && this.props.id !== prevProps.id) {
      this.updateId();
      this.fetchData();
    }
  }
  updateId = () => {
    this.setState({ id: this.props.id });
    console.log(this.state.id);
    console.log(this.props.name);
  };

  fetchData = () => {
    fetch(this.props.apiQuery)
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (data.teams) {
          let roster = data.teams[0].franchise.roster.roster;
          let playerData = this.formatData(
            roster,
            this.props.isGoalie,
            this.props.statCategories
          );
          this.setState({
            roster: roster,
            playerData: playerData
          });
        }
        console.log(data.teams);
      });
  };

  formatData = data => {
    let filteredData = data
      .filter(player => {
        if (this.props.isGoalie) {
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
          jerseyNumber: Number(jerseyNumber),
          position: position.abbreviation
        };
        Object.keys(this.props.statCategories).forEach(stat => {
          data[stat] = stats[stat];
        });
        return data;
      });
    return this.sortData(filteredData, this.state.sortKey);
  };

  handleSort = (data, sortKey) => {
    if (sortKey === this.state.sortKey) {
      return data.reverse();
    } else {
      this.setState({ sortKey: sortKey });
      this.sortData(data, sortKey);
    }
  };

  sortData = (data, sortKey) => {
    return data.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return -1;
      if (a[sortKey] < b[sortKey]) return 1;
      return 0;
    });
  };

  sortStateData = (data, sortKey) => {
    let sortedData = this.handleSort(data, sortKey);
    if (sortedData) {
      this.setState({ playerData: sortedData });
    }
  };

  render() {
    const { playerData } = this.state;
    return (
      <table id={this.props.name}>
        <thead>
          <tr>
            <th />
            {}
            <th onClick={() => this.sortStateData(playerData, "firstName")}>
              First
            </th>
            <th onClick={() => this.sortStateData(playerData, "lastName")}>
              Last
            </th>
            <th onClick={() => this.sortStateData(playerData, "jerseyNumber")}>
              No.
            </th>
            <th onClick={() => this.sortStateData(playerData, "position")}>
              Pos.
            </th>
            {Object.entries(this.props.statCategories).map((category, i) => (
              <th
                key={i}
                onClick={() => this.sortStateData(playerData, category[0])}
              >
                {category[1]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {playerData.map((player, i) => {
            return <StatTableRow player={player} key={i} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default StatTable;
