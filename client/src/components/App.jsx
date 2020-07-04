/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Developer from './Developer.jsx';
import Genre from './Genre.jsx';
import Links from './Links.jsx';
import OS from './OS.jsx';
import Platforms from './Platforms.jsx';
import Publisher from './Publisher.jsx';
import SteamRating from './SteamRating.jsx';
import SystemReqs from './SystemReqs.jsx';

const AppWrapper = styled.div`
  background-color: #1b1e1b;
  color: #7a8086;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100vw;
`;

const OverviewStyled = styled.div`
  /* border-top: 1px solid gray;
  border-bottom: 1px solid gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 239px;
  width: 100%;
  font-weight: 900;
  font-size: 14px;
`;

const QuarterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 274px;
  height: 157px;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppWrapper>
        {/* <h1>Future Overview Service</h1> */}
        <OverviewStyled>
          <QuarterStyled>
            <Platforms />
            <OS />
            <Genre />
          </QuarterStyled>
          <QuarterStyled>
            <Developer />
            <Publisher />
            <SystemReqs />
          </QuarterStyled>
          <QuarterStyled>
            <SteamRating />
            <Links />
          </QuarterStyled>
          <QuarterStyled> </QuarterStyled>
        </OverviewStyled>
      </AppWrapper>
    );
  }
}

export default App;
