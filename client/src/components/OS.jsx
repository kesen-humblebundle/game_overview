import React from 'react';
import styled from 'styled-components';

const OSStyled = styled.div`
  height: 46px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const ContainerStyled = styled.span`
  height: 28px;
`;

const ImageStyled = styled.img`
  margin-top: 3px;
  width: 21px;
`;

const OS = (props) => {
  const OS = props.os;
  const osArray = OS.map((os, index) => {
    return <ImageStyled src={os[0]} alt="os icon" key={index} />;
  });
  return (
    <OSStyled>
      <ParaStyled>OPERATING SYSTEM</ParaStyled>
      <ContainerStyled>{osArray}</ContainerStyled>
    </OSStyled>
  );
};

export default OS;
