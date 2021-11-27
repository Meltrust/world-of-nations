import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Profile from '../components/Profile';

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
        rocketReserved: true,
      }],

    },
    missionsReducer: [{
      missionId: '9D1B7F0',
      missionName: 'The best mission ever',
      description: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.',
      reserved: true,
    }],
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<Profile />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Renders joined rockets list', () => {
    expect(screen.getByTestId('joinedRockets')).toBeInTheDocument();
  });

  test('Renders joined missions list', () => {
    expect(screen.getByTestId('joinedMissions')).toBeInTheDocument();
  });
});
