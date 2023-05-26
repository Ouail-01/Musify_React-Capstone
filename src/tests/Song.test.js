import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Song from '../components/Music/Song';

const mockStore = configureStore([]);

describe('Song component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      music: {
        music: {
          preview: 'http://preview-url.com',
          title: 'Song Title',
        },
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Song />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
