import React from 'react';
import styled from 'styled-components';

const PlatformsStyled = styled.div`
  height: 51px;
`;

const ParaStyled = styled.p`
  margin: 0;
  margin-bottom: 2px;
  padding: 0;
`;

const PlatformStyled = styled.span`
  display: inline-flex;
  align-items: center;
  box-sizing: content-box;
  margin: auto;
  padding: 0px 3px;
  height: 28px;
  background: #313532;
  border-radius: 3px 0 0 3px;
  border: 1px solid #a1a7b2;
`;

const OSStyled = styled.span`
  display: inline-flex;
  align-items: center;
  box-sizing: content-box;
  margin: auto;
  padding: 0 3px;
  height: 28px;
  background: #1b1d1a;
  border-radius: 0 3px 3px 0;
  border: 1px solid #a1a7b2;
  border-left: none;
`;

const ImageStyled = styled.img`
  margin: 2px 0 3.25px 0;
  width: 21px;
`;

const Platforms = (props) => {
  const platforms = props.platforms;
  const os = props.os;

  const platformsArray = platforms.map((platform, index) => {
    return <ImageStyled src={platform[0]} alt="platform icon" key={index} />;
  });
  const osArray = os.map((osIcon, index) => {
    return <ImageStyled src={osIcon[0]} alt="os icon" key={index} />;
  });

  return (
    <PlatformsStyled>
      <ParaStyled>PLATFORM</ParaStyled>
      <PlatformStyled>{platformsArray}</PlatformStyled>
      <OSStyled>{osArray}</OSStyled>
    </PlatformsStyled>
  );
};

export default Platforms;
