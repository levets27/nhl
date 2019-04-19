import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import placeholder from "../images/person-placeholder-sm.png";

const StatTableRow = ({ player }) => {
  const [playerImg, setPlayerImg] = useState();

  useEffect(() => {
    if (!playerImg) {
      let imgPath = `https://nhl.bamcontent.com/images/headshots/current/60x60/${
        player.id
      }.jpg`;
      setPlayerImg(imgPath);
    }
  }, []);

  const handleImageErrored = () => {
    setPlayerImg(placeholder);
  };

  const Row = styled.tr`
    td {
      padding: 0.25rem 0.5rem;
    }
    &:nth-child(2n + 1) td {
      background: #eee;
    }
    img {
      border-radius: 50%;
    }
  `;

  return (
    <Row>
      {Object.entries(player).map((playerData, i) => {
        const key = playerData[0],
          value = playerData[1];
        let content;
        if (key === "id") {
          content = (
            <img
              src={playerImg}
              alt=""
              height={40}
              width={40}
              onError={handleImageErrored}
            />
          );
        } else {
          content = value;
        }
        return <td key={i}>{content}</td>;
      })}
    </Row>
  );
};

StatTableRow.propTypes = {
  player: PropTypes.object.isRequired
};

export default StatTableRow;
