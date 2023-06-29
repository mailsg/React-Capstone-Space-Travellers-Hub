import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../redux/store';

describe('User Interactions test', () => {
  it('will test user interaction', async () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
