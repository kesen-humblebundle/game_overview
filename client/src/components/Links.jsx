import React from 'react';
import styled from 'styled-components';

const LinksStyled = styled.div`
  /* height: 36px; */
  height: 157px;
`;

const ParaStyled = styled.p`
  margin: 0;
  padding: 0;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LinkStyled = styled.a`
  color: white;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Links = (props) => {
  const linksArray = props.links.map((link, index) => {
    return (
      <LinkStyled key={index} link={link}>
        {link}
      </LinkStyled>
    );
  });
  return (
    <LinksStyled>
      <ParaStyled>LINKS</ParaStyled>
      <ContainerStyled>{linksArray}</ContainerStyled>
    </LinksStyled>
  );
};

export default Links;
