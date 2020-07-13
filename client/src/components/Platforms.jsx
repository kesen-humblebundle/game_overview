import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  height: 51px;
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

const Platforms = (props) => {
  const platforms = props.platforms;
  const platformsArray = platforms.map((platform, index) => {
    return <img src={platform} alt="platform icon" width="21px" key={index}></img>;
  });
  return (
    <PlatformsStyled>
      <ParaStyled>PLATFORM</ParaStyled>
      {platformsArray}
    </PlatformsStyled>
  );
};

export default Platforms;
