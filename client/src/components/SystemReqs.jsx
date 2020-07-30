import React from 'react';
import styled from 'styled-components';

const SystemStyled = styled.div`
  height: 36px;
`;

const StyledP = styled.p`
  margin: 0;
  padding: 0;
`;

const StyledPNext = styled.p`
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
      <StyledP>SYSTEM REQUIREMENTS</StyledP>
      <StyledPNext onClick={props.jump}>Learn More</StyledPNext>
    </SystemStyled>
  );
};

export default SystemReqs;
