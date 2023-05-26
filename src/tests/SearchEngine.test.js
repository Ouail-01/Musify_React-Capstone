import React from 'react';
import { render } from '@testing-library/react';
import SearchEngine from '../components/Home/SearchEngine';

describe('SearchEngine component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<SearchEngine />);
    expect(asFragment()).toMatchSnapshot();
  });
});
