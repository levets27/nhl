import React from "react";
import { checkImage, imageExists } from "../utils";
import placeholder from "../images/person-placeholder-sm.png";

const StatTableRow = props => {
  const { player, size } = props;
  return (
    <tr>
      {Object.entries(player).map((playerData, i) => {
        const key = playerData[0],
          value = playerData[1];
        let content;
        if (key === "id") {
          let imagePath = `https://nhl.bamcontent.com/images/headshots/current/60x60/${value}.jpg`;
          content = <img src={imagePath} alt="" height={size} width={size} />;
        } else {
          content = value;
        }
        return <td key={i}>{content}</td>;
      })}
    </tr>
  );
};

StatTableRow.defaultProps = {
  player: {},
  size: 40
};

export default StatTableRow;
