import React from 'react';
import styled from 'styled-components';

const PubStyled = styled.div`
  height: 36px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const H4Styled = styled.a`
  color: white;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Publisher = (props) => {
  return (
    <PubStyled>
      <ParaStyled>PUBLISHER</ParaStyled>
      <H4Styled>{props.publisher}</H4Styled>
    </PubStyled>
  );
};

export default Publisher;
