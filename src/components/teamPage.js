import React, { useState, useContext, useEffect } from "react";
import { TeamsContext } from "../context/teamsContext";
import Title from "./title";
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
        if (newTeam && currentTeam !== newTeam) {
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
        <>
          <Title level={1} centered>
            <img
              src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${currentTeamId}.svg`}
              width="60"
              height="60"
              alt=""
            />
            {currentTeam.name}
          </Title>
          <section>
            <Title level={2}>Skater Stats</Title>
            <StatTableContainer
              teamId={currentTeamId}
              name={`teamSkaterStats-${abbr}`}
              apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${currentTeamId}?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
              sortKey="points"
              statCategories={skaterStatCategories}
            />
          </section>
          <section>
            <Title level={2}>Goalie Stats</Title>
            <StatTableContainer
              teamId={currentTeamId}
              name={`teamGoalieStats-${abbr}`}
              apiQuery={`https://statsapi.web.nhl.com/api/v1/teams/${currentTeamId}?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))`}
              isGoalie
              sortKey="wins"
              statCategories={goalieStatCategories}
            />
          </section>
        </>
      )}
    </section>
  );
};

export default TeamPage;
