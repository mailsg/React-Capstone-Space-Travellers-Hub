import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
