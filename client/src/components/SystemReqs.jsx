import React from 'react';
import styled from 'styled-components';

const SystemStyled = styled.div`
  height: 36px;
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

const SystemReqs = (props) => {
  return (
    <SystemStyled>
      <ParaStyled>SYSTEM REQUIREMENTS</ParaStyled>
      <H4Styled>Some Content</H4Styled>
    </SystemStyled>
  );
};

export default SystemReqs;
