import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/configureStore';
import HomePage from '../components/homepage/HomePage';
import FilterCountries from '../components/homepage/FilterCountries';
import SectionHeader from '../components/SectionHeader';
import Country from '../components/Country';

describe('Components snapshot testing', () => {
  test('Home page testing', () => {
    const homePage = renderer.create(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    ).toJSON;
    expect(homePage).toMatchSnapshot();
  });
  test('Renders search box', () => {
    const box = renderer.create(
      <Provider store={store}>
        <FilterCountries />
      </Provider>,
    ).toJSON;
    expect(box).toMatchSnapshot();
  });
  test('Renders Section Header', () => {
    const sectionHead = renderer.create(
      <Provider store={store}>
        <SectionHeader />
      </Provider>,
    ).toJSON;
    expect(sectionHead).toMatchSnapshot();
  });
  test('Renders Countries', () => {
    const test = { id: 'SDN', name: 'Sudan' };

    const country = renderer.create(
      <Provider store={store}>
        <Country collectionInfo={test} />
      </Provider>,
    ).toJSON;
    expect(country).toMatchSnapshot();
  });

  test('Header rendering', () => {
    const header = renderer.create(
      <Provider store={store}>
        <BrowserRouter><Header /></BrowserRouter>
      </Provider>,
    ).toJSON;
    expect(header).toMatchSnapshot();
  });
});
