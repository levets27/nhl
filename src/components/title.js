import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = ({ centered, children, level }) => {
  const StyledTitle = styled(`h${level}`)`
    text-align: ${centered && "center"};
    margin: 2rem 0 0.25rem;
    font-size: ${1 / level + (1 + 0.5 / level)}rem;
  `;
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  level: PropTypes.number
};
Title.defaultProps = {
  centered: false,
  level: 1
};

export default Title;
