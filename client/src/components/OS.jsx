import React from 'react';
import styled from 'styled-components';

const OSStyled = styled.div`
  height: 46px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const H4Styled = styled.h4`
  color: white;
  margin: 0;
  padding: 0;
`;

const OS = (props) => {
  return (
    <OSStyled>
      <ParaStyled>OPERATING SYSTEM</ParaStyled>
      <H4Styled>Some Content</H4Styled>
    </OSStyled>
  );
};

export default OS;
