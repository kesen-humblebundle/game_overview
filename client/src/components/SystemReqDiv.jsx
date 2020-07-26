import React from 'react';
import styled from 'styled-components';
import SystemBlock from './SystemBlock.jsx';

const StyledWrapper = styled.div`
  background: #1b1d1a;
  width: 100%;
  overflow: hidden;
  height: 304px;
`;
const StyledMain = styled.div`
  position: relative;
  margin: 0 auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
  padding: 35px 0;
  width: 1140px;
  height: 304px;
  color: #a1a7b2;
  z-index: 1;
  background: #1b1d1a;
  &:after {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: linear-gradient(
      0deg,
      rgba(27, 29, 26, 1) 0%,
      rgba(27, 29, 26, 1) 42%,
      rgba(27, 29, 26, 0) 58%,
      rgba(27, 29, 26, 0) 100%
    );
  }
`;

const StyledH4 = styled.h4`
  margin: 0 0 11px 0;
  letter-spacing: 0.75px;
`;

const StyledH5 = styled.h5`
  font-size: 15px;
  margin: 0 0 22px 0;
  letter-spacing: 0.75px;
`;

const StyledSysReq = styled.div`
  height: 150px;
  width: 100%;
`;

const StyledLink = styled.a`
  position: absolute;
  bottom: 119px;
  z-index: 10;
  color: #a1a7b2;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
`;

class SystemReqDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    console.log(this.props);
    let keysArr = Object.keys(this.props.sysReq);
    console.log(keysArr);
    let systems = keysArr.map((key) => {
      return <SystemBlock sys={this.props.sysReq[key]} name={key} />;
    });
    return (
      <StyledWrapper>
        <StyledMain>
          <StyledH4>SYSTEM REQUIREMENTS</StyledH4>
          <StyledSysReq>
            <StyledH5>Minimum:</StyledH5>
            {systems}
          </StyledSysReq>
          <StyledLink href="#">Show more system requirements</StyledLink>
        </StyledMain>
      </StyledWrapper>
    );
  }
}

export default SystemReqDiv;
