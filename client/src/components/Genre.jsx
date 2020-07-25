import React from 'react';
import styled from 'styled-components';

const GenreStyled = styled.div`
  height: 36px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const SpanStyled = styled.span`
  color: white;
  margin: 0;
  padding: 0;
`;

const Genre = (props) => {
  const genres = props.genres.map((genre, index) => {
    return <SpanStyled key={index}> {genre}</SpanStyled>;
  });
  return (
    <GenreStyled>
      <ParaStyled>GENRE</ParaStyled>
      {genres}
    </GenreStyled>
  );
};

export default Genre;
