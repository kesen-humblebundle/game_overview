import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: pink;
  color: black;
  z-index: 20;
`;

class SystemReqDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    return (
      <StyledDiv>
        <h2>Hello Im system reqs</h2>
      </StyledDiv>
    );
  }
}

export default SystemReqDiv;
