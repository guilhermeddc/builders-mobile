import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '.';

describe('Home', () => {
  it('should render correctly', () => {
    const {getByText, getAllByTestId} = render(<Home />);
    expect(getByText(/atualizar/i)).toBeDefined();

    fireEvent.press(getByText(/atualizar/i));
    act(() => {
      expect(getAllByTestId(/loading/i)[0]).toBeDefined();
    });
  });
});
