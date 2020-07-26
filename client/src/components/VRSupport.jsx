import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  text-decoration: underline;
  text-transform: capitalize;
  margin: 21px 0 1px 0;
`;

const StyledUL = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledP = styled.li`
  list-style-type: none;
  letter-spacing: 1px;
  line-height: 1.4;
  font-size: 15px;
  font-weight: 300;
`;

const StyledLabel = styled.span`
  font-weight: 500;
`;

const VRSupport = (props) => {
  return (
    <div>
      <StyledH4>{props.name}</StyledH4>
      <StyledUL>
        <StyledP>
          <StyledLabel>Headsets: </StyledLabel>
          {props.sys.headsets}
        </StyledP>
        <StyledP>
          <StyledLabel>Input: </StyledLabel>
          {props.sys.input}
        </StyledP>
        <StyledP>
          <StyledLabel>Play Area: </StyledLabel>
          {props.sys.playArea}
        </StyledP>
      </StyledUL>
    </div>
  );
};

export default VRSupport;
