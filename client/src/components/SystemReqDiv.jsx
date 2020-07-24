import React from 'react';
import styled from 'styled-components';
import SystemBlock from './SystemBlock.jsx';

const StyledWrapper = styled.div`
  background-color: #1b1d1a;
  width: 100%;
`;
const StyledMain = styled.div`
  margin: 0 auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
  padding: 35px 0;
  width: 1140px;
  height: 304px;
  background-color: #1b1d1a;
  color: #a1a7b2;
`;

const StyledSpan = styled.h4`
  margin: 0 0 10px 0;
  letter-spacing: 0.75px;
`;

const StyledSysReq = styled.div`
  height: 150px;
  width: 100%;
`;

class SystemReqDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    console.log(this.props);
    // let keysArr = Object.keys(this.props.sysReq);
    // console.log(keysArr);
    // let systems = keysArr.map((key) => {
    //   return <SystemBlock sys={this.props.sysReq[key]} name={key} />;
    // });
    return (
      <StyledWrapper>
        <StyledMain>
          <StyledSpan>SYSTEM REQUIREMENTS</StyledSpan>
          <StyledSysReq>
            <StyledSpan>Minimum:</StyledSpan>
            <SystemBlock />
          </StyledSysReq>
        </StyledMain>
      </StyledWrapper>
    );
  }
}

export default SystemReqDiv;
