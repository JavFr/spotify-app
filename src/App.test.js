import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from './setupTests';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App getToken={() =>  ''} />);
  });
});
