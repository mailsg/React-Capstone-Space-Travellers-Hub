import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import MyProfile from '../components/MyProfile';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
