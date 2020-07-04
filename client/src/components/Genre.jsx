import React from 'react';
import styled from 'styled-components';

const GenreStyled = styled.div`
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

const Genre = (props) => {
  return (
    <GenreStyled>
      <ParaStyled>GENRE</ParaStyled>
      <H4Styled>Some Content</H4Styled>
    </GenreStyled>
  );
};

export default Genre;
