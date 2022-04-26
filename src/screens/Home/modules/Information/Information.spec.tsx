import React from 'react';
import {Information} from '.';
import {render} from '@testing-library/react-native';

describe('Information', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Information humidity={10} speed={20} />);
    expect(getByText(/Umidade/i)).toBeDefined();
    expect(getByText(/10/i)).toBeDefined();
    expect(getByText(/Vento/i)).toBeDefined();
    expect(getByText(/32.19/i)).toBeDefined();
  });
});
