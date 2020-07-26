import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  text-decoration: ${(props) => (props.name === 'VR Support' ? 'none' : 'underline')};
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
  font-size: 15px
  text-transform: capitalize;
  font-weight: 300;
`;
const StyledLabel = styled.span`
  font-weight: 500;
`;
const SystemBlock = (props) => {
  const name = props.name === 'vrSupport' ? 'VR Support' : props.name;
  return (
    <div>
      <StyledH4 name={name}>{name}</StyledH4>
      <StyledUL>
        <StyledP>
          <StyledLabel>OS: </StyledLabel>
          {props.sys.OS}
        </StyledP>
        <StyledP>
          <StyledLabel>Processor: </StyledLabel>
          {props.sys.Processor}
        </StyledP>
        <StyledP>
          <StyledLabel>Memory: </StyledLabel>
          {props.sys.Memory}
        </StyledP>
        <StyledP>
          <StyledLabel>Storage: </StyledLabel>
          {props.sys.Storage}
        </StyledP>
        <StyledP>
          <StyledLabel>Graphics: </StyledLabel>
          {props.sys.Graphics}
        </StyledP>
        {name !== 'mac' && name !== 'linux' && (
          <StyledP>
            <StyledLabel>DirectX: </StyledLabel>
            {props.sys.DirectX}
          </StyledP>
        )}
        <StyledP>
          <StyledLabel>Network: </StyledLabel>
          {props.sys.Network}
        </StyledP>
      </StyledUL>
    </div>
  );
};

export default SystemBlock;
