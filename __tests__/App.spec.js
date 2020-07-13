/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import AppWrapper from '../client/src/components/App.jsx';
import Developer from '../client/src/components/Developer.jsx';
// import DevStyled from '../client/src/components/Developer.jsx';
// import SpecStyled from '../client/src/components/Developer.jsx';
import Genre from '../client/src/components/Genre.jsx';
import Links from '../client/src/components/Links.jsx';
import OS from '../client/src/components/OS.jsx';
import Platforms from '../client/src/components/Platforms.jsx';
import Publisher from '../client/src/components/Publisher.jsx';
import SteamRating from '../client/src/components/SteamRating.jsx';
import SystemReqs from '../client/src/components/SystemReqs.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders with correct css width, color, background-color', () => {
    const app = renderer.create(<AppWrapper />).toJSON();

    expect(app).toHaveStyleRule('width', '100%');
    expect(app).toHaveStyleRule('background-color', '#1b1e1b');
    expect(app).toHaveStyleRule('color', '#a1a7b2');
  });

  it('renders one Developer component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Developer)).toHaveLength(1);
  });

  it('renders one Genre component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Genre)).toHaveLength(1);
  });

  it('renders one Links component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Links)).toHaveLength(1);
  });

  it('renders one OS component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(OS)).toHaveLength(1);
  });

  it('renders one Platform component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Platforms)).toHaveLength(1);
  });

  it('renders one Publisher component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Publisher)).toHaveLength(1);
  });

  it('renders one SteamRatingcomponent', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(SteamRating)).toHaveLength(1);
  });

  it('renders one SystemReqs component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(SystemReqs)).toHaveLength(1);
  });
});
