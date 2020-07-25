import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  text-decoration: underline;
  text-transform: capitalize;
`;
const SystemBlock = (props) => {
  return (
    <div>
      <StyledH4>{props.name}</StyledH4>
    </div>
  );
};

export default SystemBlock;
