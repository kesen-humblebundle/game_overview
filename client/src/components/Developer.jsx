import React from 'react';
import styled from 'styled-components';

const DevStyled = styled.div`
  height: 36px;
`;

const HeaderStyled = styled.h4`
  margin: 0;
  padding: 0;
`;

const SpecStyled = styled.a`
  color: white;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Developer = (props) => {
  return (
    <DevStyled>
      <HeaderStyled>DEVELOPER</HeaderStyled>
      <SpecStyled>{props.developer}</SpecStyled>
    </DevStyled>
  );
};

export default Developer;
