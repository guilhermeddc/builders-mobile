import React from 'react';
import {Degrees} from '.';
import {render} from '@testing-library/react-native';

describe('Degrees', () => {
  it('should render correctly', () => {
    const tree = render(<Degrees temp={0} />);
    expect(tree.toJSON()).toMatchSnapshot();
    expect(tree.getByText(/-273.15/i)).toBeDefined();
  });
});
