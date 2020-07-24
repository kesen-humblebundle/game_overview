import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  text-decoration: underline;
`;
const SystemBlock = (props) => {
  return (
    <div>
      <StyledH4>System info</StyledH4>
    </div>
  );
};

export default SystemBlock;
