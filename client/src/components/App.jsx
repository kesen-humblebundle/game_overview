/* eslint-disable react/sort-comp */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  color: #a1a7b2;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
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
  line-height: 1.35;
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
    this.state = {
      product_id: window.location.pathname,
      open: false,
      genre: ['RPG'],
      steamDesc: '',
      overview: {
        platforms: [],
        os: [
          'https://res.cloudinary.com/overview/image/upload/t_icon/v1593704464/platformicons/WindowsTrans_ara7pa.png'
        ],
        links: ['Sawayn - Dach', 'Kirlin, VonRueden and Veum', 'Tillman - Wehner'],
        _id: '5f06634ec9e05c2f42bd380a',
        product_id: 21,
        developer: 'Kuhn - Bailey',
        publisher: 'Graphical User Interface Future',
        system_req: {
          windows: {
            OS: 'windows 10 Future',
            Processor: 'Intel Core i7 7000',
            Memory: '8 GB',
            Graphics: 'NVIDIA GeForce 840 4GB / AMD Radeon 550 4GB',
            DirectX: 'Version 11',
            Network: 'Broadband Internet',
            Storage: '90 GB'
          }
        },
        steam_rating: null,
        __v: 0
      }
    };
    this.fetchOverview = this.fetchOverview.bind(this);
  }

  fetchOverview(id) {
    if (id === '/') {
      id = '/21';
    }
    const fetchURL = `http://ec2-3-129-17-68.us-east-2.compute.amazonaws.com:3002/system_req${id}`;
    // const fetchURL = `http://127.0.0.1:3002/system_req${id}`;

    axios
      .get(fetchURL, { crossdomain: true })
      .then((response) => {
        console.log('response??');
        console.log('Data ?', response.data);
        const newState = { overview: response.data[0], genre: response.data[1] };

        if (response.data[2]) {
          newState.steamDesc = response.data[2];
        }

        this.setState(newState);
      })
      .catch((err) => {
        throw err;
      });
  }

  componentDidMount() {
    this.fetchOverview(window.location.pathname);
  }

  render() {
    console.log('platforms', this.state.overview.platforms);
    return (
      <AppWrapper>
        <OverviewStyled>
          <QuarterStyled>
            <Platforms platforms={this.state.overview.platforms} os={this.state.overview.os} />
            <OS os={this.state.overview.os} />
            <Genre genres={this.state.genre} />
          </QuarterStyled>
          <QuarterStyled>
            <Developer developer={this.state.overview.developer} />
            <Publisher publisher={this.state.overview.publisher} />
            <SystemReqs open={this.state.open} />
          </QuarterStyled>
          <QuarterStyled>
            <SteamRating
              icon={this.state.overview.platforms}
              rating={this.state.overview.steam_rating}
              description={this.state.steamDesc}
            />
            <Links links={this.state.overview.links} />
          </QuarterStyled>
          <QuarterStyled> </QuarterStyled>
        </OverviewStyled>
      </AppWrapper>
    );
  }
}

export default App;
