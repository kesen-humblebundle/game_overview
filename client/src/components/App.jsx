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
  /* @font-face {
    font-family: 'Sofia Pro';
    src: url('../sofiaNorm.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: url('../sofiaBold') format('truetype');
    font-weight: 900;
    font-style: normal;
  } */

  /* @font-face {
    font-family: 'Sofia Pro';
    src: url('https://humblebundle-a.akamaihd.net/static/hashed/9370f719a25957b05ace466b39c2a2d4b33734c6.ttf')
      format('truetype');
    font-weight: normal;
    font-style: normal;
  } */
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
  font-weight: bold;
  font-size: 14px;
`;

const QuarterStyled = styled.div`
  display: flex;
  flex-shrink: 1;
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
