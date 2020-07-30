import React from 'react';
import styled from 'styled-components';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { IconContext } from 'react-icons';
import SystemBlock from './SystemBlock.jsx';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #1b1d1a;
  width: 100%;
  overflow: hidden;
  height: ${(props) => {
    return props.open ? `${Object.keys(props.sysReq).length * 220 + 140}px` : '304px';
  }};
`;
const StyledMain = styled.div`
  position: relative;
  margin: 0 auto;
  flex: 1;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
  min-height: ${(props) => {
    return props.open ? `${Object.keys(props.sysReq).length * 220 + 140}px` : '304px';
  }};
  padding: 35px 0;
  width: 1140px;
  color: #a1a7b2;
  background: #1b1d1a;
  &:after {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: ${(props) =>
      props.open
        ? 'transparent'
        : `linear-gradient(
      0deg,
      rgba(27, 29, 26, 1) 0%,
      rgba(27, 29, 26, 1) 42%,
      rgba(27, 29, 26, 0) 58%,
      rgba(27, 29, 26, 0) 100%
    )`};
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

const StyledLink = styled.p`
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
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    console.log(this.props);
    let keysArr = Object.keys(this.props.sysReq);
    console.log(keysArr);
    let systems = keysArr.map((key) => {
      return <SystemBlock sys={this.props.sysReq[key]} name={key} key={key} />;
    });

    return (
      <StyledWrapper open={this.state.open} sysReq={this.props.sysReq}>
        <StyledMain open={this.state.open} sysReq={this.props.sysReq}>
          <StyledH4>SYSTEM REQUIREMENTS</StyledH4>
          <StyledSysReq>
            <StyledH5>Minimum:</StyledH5>
            {systems}
          </StyledSysReq>
          <IconContext.Provider
            value={{ style: { verticalAlign: 'middle', paddingBottom: '3px' } }}
          >
            {this.state.open ? (
              <StyledLink id="SystemRequirements" onClick={this.handleClick}>
                Show less system requirements <GoTriangleUp />
              </StyledLink>
            ) : (
              <StyledLink id="SystemRequirements" onClick={this.handleClick}>
                Show more system requirements <GoTriangleDown />
              </StyledLink>
            )}
          </IconContext.Provider>
        </StyledMain>
      </StyledWrapper>
    );
  }
}

export default SystemReqDiv;
