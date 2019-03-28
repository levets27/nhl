import React from "react";
import PlayerTableRow from "./statTableRow";

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
            return <PlayerTableRow player={player} key={i} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SkaterTable;
