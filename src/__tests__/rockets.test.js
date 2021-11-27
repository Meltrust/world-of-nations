import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Rockets from '../components/Rockets';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test rocket component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    rocketsReducer: {
      loading: false,
      error: '',
      rockets: [{
        id: '9D1B7F0',
        rocketName: 'The best rocket ever',
        description: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.',
        rocketReserved: false,
      }],

    },
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<Rockets />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Renders rockets list', () => {
    expect(screen.getByTestId('rocketsList')).toBeInTheDocument();
  });

  test('Renders individual rocket', () => {
    expect(screen.getByText('Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.')).toBeInTheDocument();
  });
  test('Renders "Join Rocket" button', () => {
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
  test('Renders "Leave Mission" button', () => {
    mockStore.rocketsReducer.rockets[0].rocketReserved = true;
    render(<Rockets />);
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
