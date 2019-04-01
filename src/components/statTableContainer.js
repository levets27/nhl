import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StatTable from "./statTable";

const StatTableContainer = ({
  apiQuery,
  isGoalie,
  name,
  sortKey,
  statCategories,
  teamId
}) => {
  const [currentSortKey, setCurrentSortKey] = useState(sortKey);
  const [currentTeamId, setCrrentTeamId] = useState(null);
  const [roster, setRoster] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    if (roster.length === 0 || teamId !== currentTeamId) {
      fetchData();
    }
    if (teamId !== currentTeamId) {
      setCrrentTeamId(teamId);
    }
  });

  const fetchData = () => {
    fetch(apiQuery)
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (data.teams) {
          let newRoster = data.teams[0].franchise.roster.roster;
          let newPlayerData = formatData(newRoster, isGoalie, statCategories);
          setRoster(newRoster);
          setPlayerData(newPlayerData);
        }
      });
  };

  const formatData = data => {
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
          jerseyNumber: Number(jerseyNumber),
          position: position.abbreviation
        };
        Object.keys(statCategories).forEach(stat => {
          data[stat] = stats[stat];
        });
        return data;
      });
    return sortData(currentSortKey, filteredData);
  };

  const sortStateData = e => {
    let sortKey = e.target.dataset.title;
    let sortedData = handleSort(sortKey);
    if (sortedData) {
      setPlayerData(sortedData);
    }
  };

  const handleSort = sortKey => {
    let data = playerData;
    if (sortKey === currentSortKey) {
      return [...data].reverse();
    } else {
      setCurrentSortKey(sortKey);
      return sortData(sortKey);
    }
  };

  const sortData = (sortKey, data = playerData) => {
    return data.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return -1;
      if (a[sortKey] < b[sortKey]) return 1;
      return 0;
    });
  };

  return (
    <StatTable
      playerData={playerData}
      id={name}
      statCategories={statCategories}
      handleHeaderClick={sortStateData}
    />
  );
};

StatTableContainer.propTypes = {
  apiQuery: PropTypes.string.isRequired,
  isGoalie: PropTypes.bool,
  name: PropTypes.string.isRequired,
  sortKey: PropTypes.string,
  statCategories: PropTypes.object.isRequired,
  teamId: PropTypes.number.isRequired
};

StatTableContainer.defaultProps = {
  isGoalie: false,
  sortKey: "points"
};

export default StatTableContainer;
