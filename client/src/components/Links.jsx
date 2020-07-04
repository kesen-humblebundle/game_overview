import React from 'react';
import styled from 'styled-components';

const LinksStyled = styled.div`
  height: 36px;
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

const Links = (props) => {
  return (
    <LinksStyled>
      <ParaStyled>LINKS</ParaStyled>
      <H4Styled>Some Content</H4Styled>
    </LinksStyled>
  );
};

export default Links;
