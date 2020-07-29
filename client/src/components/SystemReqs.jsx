import React from 'react';
import styled from 'styled-components';

const SystemStyled = styled.div`
  height: 36px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const AStyled = styled.a`
  color: white;
  margin: 0;
  padding: 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SystemReqs = (props) => {
  return (
    <SystemStyled>
      <ParaStyled>SYSTEM REQUIREMENTS</ParaStyled>
      <AStyled href="#SystemRequirements" onClick={props.clearHash}>
        Learn More
      </AStyled>
    </SystemStyled>
  );
};

export default SystemReqs;
