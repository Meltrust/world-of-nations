import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/homepage/HomePage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test Homepage component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    countriesReducer: {
      loading: false,
      error: '',
      searchBox: 'Sudan',
      countriesDisplay: [{
        id: 'SDN',
        population: '43.85 million',
        name: 'Sudan',
      }],

    },
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<BrowserRouter><HomePage /></BrowserRouter>);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Renders countries list', () => {
    expect(screen.getByTestId('countriesList')).toBeInTheDocument();
  });

  test('Renders individual country', () => {
    expect(screen.getByText('Sudan')).toBeInTheDocument();
  });
  test('Renders the correct header', () => {
    expect(screen.getByText('Whole World')).toBeInTheDocument();
  });
  test('Renders correct search results', () => {
    mockStore.countriesReducer.searchBox = 'Mexico';
    render(<BrowserRouter><HomePage /></BrowserRouter>);
    expect(mockStore.countriesReducer.searchBox).toEqual('Mexico');
  });
});
