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
  return (
    <PlatformsStyled>
      <ParaStyled>PLATFORM</ParaStyled>
      <H4Styled>Some Content</H4Styled>
    </PlatformsStyled>
  );
};

export default Platforms;
