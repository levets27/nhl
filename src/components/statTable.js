import React from "react";
import PropTypes from "prop-types";
import StatTableRow from "./statTableRow";

const StatTable = ({ handleHeaderClick, id, playerData, statCategories }) => {
  return (
    <table id={id}>
      <thead>
        <tr>
          <th />
          <th data-title="firstName" onClick={handleHeaderClick}>
            First
          </th>
          <th data-title="lastName" onClick={handleHeaderClick}>
            Last
          </th>
          <th data-title="jerseyNumber" onClick={handleHeaderClick}>
            No.
          </th>
          <th data-title="position" onClick={handleHeaderClick}>
            Pos.
          </th>
          {Object.entries(statCategories).map((category, i) => (
            <th key={i} data-title={category[0]} onClick={handleHeaderClick}>
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
};

StatTable.propTypes = {
  handleHeaderClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  playerData: PropTypes.array.isRequired,
  statCategories: PropTypes.object.isRequired
};

export default StatTable;
