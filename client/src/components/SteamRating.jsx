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

const H4Styled = styled.p`
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
  width: 18px;
`;

const SteamRating = (props) => {
  let icon;
  const steam = props.rating ? props.rating + '% | ' : '';
  const description = props.rating ? props.description : '';
  for (let i = 0; i < props.icon.length; i++) {
    if (props.icon[i][0].indexOf('Steam') > 0) {
      icon = props.icon[i][0];
    } else {
      icon = false;
    }
  }
  return (
    <SteamStyled>
      {icon && (
        <H4Styled>
          <IconStyled src={icon} alt="steam icon" />

          {steam.concat(description)}
        </H4Styled>
      )}
    </SteamStyled>
  );
};

export default SteamRating;
