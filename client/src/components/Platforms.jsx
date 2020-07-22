import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  height: 51px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const PlatformStyled = styled.div`
  display: inline-block;
  margin: auto;
  padding: 0;
  background: #313532;
  border-radius: 5px;
  border: 1px solid grey;
`;

const Platforms = (props) => {
  const platforms = props.platforms;
  const os = props.os;
  const platformsArray = platforms.map((platform, index) => {
    return <img src={platform[0]} alt="platform icon" width="21px" key={index}></img>;
  });
  const osArray = os.map((osIcon, index) => {
    return <img src={osIcon} alt="os icon" width="21px" key={index}></img>;
  });
  return (
    <PlatformsStyled>
      <ParaStyled>PLATFORM</ParaStyled>
      <PlatformStyled>{platformsArray}</PlatformStyled>
    </PlatformsStyled>
  );
};

export default Platforms;
