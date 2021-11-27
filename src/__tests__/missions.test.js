import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Missions from '../components/Missions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test mission component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    missionsReducer: [{
      missionId: '9D1B7F0',
      missionName: 'The best mission ever',
      description: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.',
      reserved: false,
    }],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<Missions />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Renders missions list', () => {
    expect(screen.getByTestId('missionsTable')).toBeInTheDocument();
  });
  test('Renders individual mission', () => {
    expect(screen.getByText('Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.')).toBeInTheDocument();
  });
  test('Renders "Join Mission" button', () => {
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });
  test('Renders "Leave Mission" button', () => {
    mockStore.missionsReducer[0].reserved = true;
    render(<Missions />);
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });
});
