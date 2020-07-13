import React from 'react';
import styled from 'styled-components';

const SteamStyled = styled.div`
  /* height: 157px; */
  @media (max-width: 959px) {
    height: 34px;
    margin-top: 20px;
  }
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

const SteamRating = (props) => {
  const steam = props.rating ? props.rating + '%' : '';

  return (
    <SteamStyled>
      <ParaStyled>STEAM RATING</ParaStyled>
      <H4Styled>{steam}</H4Styled>
    </SteamStyled>
  );
};

export default SteamRating;
