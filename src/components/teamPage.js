import React, { useState, useContext, useEffect } from "react";
import { TeamsContext } from "../context/teamsContext";
import StatTableContainer from "./statTableContainer";

const TeamPage = ({ match }) => {
  const teamsContext = useContext(TeamsContext);
  const teams = teamsContext.teams;

  const [abbr, setAbbr] = useState("");
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [currentTeam, setCurrentTeam] = useState([]);

  useEffect(() => {
    if (abbr === "" || abbr !== match.params.abbr) {
      setAbbr(match.params.abbr);
    }
    updateTeam();
  });

  const updateTeam = () => {
    if (teams.length > 0) {
      if (currentTeam && currentTeam.abbreviation !== abbr) {
        let newTeam = teams.find(({ abbreviation }) => abbreviation === abbr);
        if (currentTeam !== newTeam) {
          setCurrentTeam(newTeam);
          setCurrentTeamId(newTeam.id);
        }
      }
    }
  };
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
    <section>
      {currentTeamId && (
        <React.Fragment>
          <h1>
            <img
              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${currentTeamId}.svg`}
              width="60"
              height="60"
              alt=""
            />
            {currentTeam.name}
          </h1>
          <section>
            <h2>Skater Stats</h2>
            <StatTableContainer
              teamId={currentTeamId}
              name={`teamSkaterStats-${abbr}`}
              apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${currentTeamId}?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
              sortKey="points"
              statCategories={skaterStatCategories}
            />
          </section>
          <section>
            <h2>Goalie Stats</h2>
            <StatTableContainer
              teamId={currentTeamId}
              name={`teamGoalieStats-${abbr}`}
              apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${currentTeamId}?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
              isGoalie
              sortKey="wins"
              statCategories={goalieStatCategories}
            />
          </section>
        </React.Fragment>
      )}
    </section>
  );
};

export default TeamPage;
