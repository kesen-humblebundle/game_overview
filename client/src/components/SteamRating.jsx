import React from 'react';
import styled from 'styled-components';

const SteamStyled = styled.div`
  height: 157px;
  @media (max-width: 959px) {
    height: 34px;
    margin-top: 20px;
  }
`;

const ContainerStyled = styled.p`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 13.5px;
  color: white;
  margin: 0;
  padding: 5px;
  border: 1px solid white;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const IconStyled = styled.img`
  margin-right: 3px;
  width: 18px;
`;

const SteamRating = (props) => {
  let icon = false;
  const steam = props.rating ? props.rating + '% | ' : '';
  const description = props.rating ? props.description : '';
  if (props.icon.length) {
    for (let i = 0; i < props.icon.length; i++) {
      if (props.icon[i][0].indexOf('Steam') > 0) {
        icon = (
          <ContainerStyled>
            <IconStyled src={props.icon[i][0]} alt="steam icon" />

            {steam.concat(description)}
          </ContainerStyled>
        );
      }
    }
  }

  return <SteamStyled>{icon}</SteamStyled>;
};

export default SteamRating;
