import React from 'react';
import styled from 'styled-components';

const DevStyled = styled.div`
  height: 36px;
`;

const HeaderStyled = styled.h4`
  margin: 0;
  padding: 0;
`;

const SpecStyled = styled.h4`
  color: white;
  margin: 0;
  padding: 0;
`;

const Developer = (props) => {
  return (
    <DevStyled>
      <HeaderStyled>DEVELOPER</HeaderStyled>
      <SpecStyled>Some Content</SpecStyled>
    </DevStyled>
  );
};

export default Developer;
