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
  const os = props.os;
  const osArray = os.map((osArr, index) => {
    return <ImageStyled src={osArr[0]} alt="os icon" key={index} />;
  });
  return (
    <OSStyled>
      <ParaStyled>OPERATING SYSTEM</ParaStyled>
      <ContainerStyled>{osArray}</ContainerStyled>
    </OSStyled>
  );
};

export default OS;
