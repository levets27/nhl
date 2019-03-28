import React from "react";
// import placeholder from "../images/person-placeholder-sm.png";

const StatTableRow = props => {
  const { player } = props;
  return (
    <tr>
      {Object.entries(player).map((playerData, i) => {
        const key = playerData[0],
          value = playerData[1];
        let content;
        if (key === "id") {
          // todo - add placeholder behind each image, then layer this on top
          let imagePath = `https://nhl.bamcontent.com/images/headshots/current/60x60/${value}.jpg`;
          content = <img src={imagePath} alt="" height={40} width={40} />;
        } else {
          content = value;
        }
        return <td key={i}>{content}</td>;
      })}
    </tr>
  );
};

StatTableRow.defaultProps = {
  player: {}
};

export default StatTableRow;
