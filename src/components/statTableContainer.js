import React from "react";
import PropTypes from "prop-types";
import StatTable from "./statTable";

class StatTableContainer extends React.Component {
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

  updateId = (id = this.props.id) => {
    this.setState({ id: id });
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
    return this.sortData(this.state.sortKey, filteredData);
  };

  sortStateData = e => {
    let sortKey = e.currentTarget.dataset.title;
    let sortedData = this.handleSort(sortKey);
    if (sortedData) {
      this.setState({ playerData: sortedData });
    }
  };

  handleSort = sortKey => {
    let data = this.state.playerData;
    if (sortKey === this.state.sortKey) {
      return data.reverse();
    } else {
      this.setState({ sortKey: sortKey });
      this.sortData(sortKey);
    }
  };

  sortData = (sortKey, data = this.state.playerData) => {
    return data.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return -1;
      if (a[sortKey] < b[sortKey]) return 1;
      return 0;
    });
  };

  render() {
    const { playerData } = this.state;
    const { name, statCategories } = this.props;
    return (
      <StatTable
        playerData={playerData}
        name={name}
        statCategories={statCategories}
        handleHeaderClick={this.sortStateData}
      />
    );
  }
}

StatTableContainer.propTypes = {
  sortKey: PropTypes.string,
  apiQuery: PropTypes.string.isRequired,
  isGoalie: PropTypes.bool,
  name: PropTypes.string.isRequired,
  statCategories: PropTypes.object.isRequired
};

StatTableContainer.defaultProps = {
  sortKey: "points",
  isGoalie: false
};

export default StatTableContainer;
