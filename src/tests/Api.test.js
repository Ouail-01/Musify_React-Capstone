import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Api from '../components/Music/Api';
import store from '../redux/configureStore';

describe('Api component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Api />
        </Provider>
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
