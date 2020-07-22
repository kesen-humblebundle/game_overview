import React from 'react';
import styled from 'styled-components';

const OSStyled = styled.div`
  height: 46px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const OS = (props) => {
  const OS = props.os;
  const osArray = OS.map((os, index) => {
    return <img src={os[0]} alt="os icon" width="21px" key={index} />;
  });
  return (
    <OSStyled>
      <ParaStyled>OPERATING SYSTEM</ParaStyled>
      {osArray}
    </OSStyled>
  );
};

export default OS;
