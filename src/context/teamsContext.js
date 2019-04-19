import React, { useState, useEffect } from "react";

const TeamsContext = React.createContext();

const TeamsProvider = props => {
  let [teams, setTeams] = useState([]);

  const conferences = {
    Eastern: ["Atlantic", "Metropolitan"],
    Western: ["Central", "Pacific"]
  };

  useEffect(() => {
    if (teams.length === 0) {
      getSortedTeams();
    }
  });

  const getSortedTeams = () => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
      .then(results => {
        return results.json();
      })
      .then(allTeams => {
        let sortedTeams = sortTeams(allTeams.teams);
        setTeams(sortedTeams);
      });
  };

  const sortTeams = (teamsArray, sortBy = "name") => {
    let teamList = teamsArray.sort((a, b) => {
      if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
        return -1;
      }
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    return teamList;
  };

  return (
    <TeamsContext.Provider value={{ teams: teams, conferences: conferences }}>
      {props.children}
    </TeamsContext.Provider>
  );
};

const TeamsConsumer = TeamsContext.Consumer;

export { TeamsContext, TeamsProvider, TeamsConsumer };
