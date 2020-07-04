/* eslint-disable import/extensions */
import React from 'react';
import Developer from './Developer.jsx';
import Genre from './Genre.jsx';
import Links from './Links.jsx';
import OS from './OS.jsx';
import Platforms from './Platforms.jsx';
import Publisher from './Publisher.jsx';
import SteamRating from './SteamRating.jsx';
import SystemReqs from './SystemReqs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Future Overview Service</h1>
        <div className="overview">
          <div className="quarter">
            <Platforms />
            <OS />
            <Genre />
          </div>
          <div className="quarter">
            <Developer />
            <Publisher />
            <SystemReqs />
          </div>
          <div className="quarter">
            <SteamRating />
            <Links />
          </div>
          <div className="quarter"> </div>
        </div>
      </div>
    );
  }
}

export default App;
