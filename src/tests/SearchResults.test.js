/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchResults from '../components/Home/SearchResults';
import store from '../redux/configureStore';

describe('SearchResults component', () => {
  it('renders correctly', () => {
    const props = {
      id: '123',
    };
    const { asFragment } = render(
      <Provider store={store}>
        <SearchResults {...props} />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
