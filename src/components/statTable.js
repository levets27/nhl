import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StatTableRow from "./statTableRow";

const StatTable = ({ handleHeaderClick, name, playerData, statCategories }) => {
  const Table = styled.table`
    border-collapse: collapse;
    thead {
      background-color: rgb(35, 65, 114);
      color: white;
    }
    th {
      padding: 0.5rem;
      cursor: pointer;
    }
  `;
  const TableHeader = styled.thead``;
  return (
    <Table id={name}>
      <TableHeader>
        <tr>
          <th colSpan="3" data-title="lastName" onClick={handleHeaderClick}>
            Name
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
      </TableHeader>
      <tbody>
        {playerData.map((player, i) => {
          return <StatTableRow player={player} key={i} />;
        })}
      </tbody>
    </Table>
  );
};

StatTable.propTypes = {
  handleHeaderClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  playerData: PropTypes.array.isRequired,
  statCategories: PropTypes.object.isRequired
};

export default StatTable;
