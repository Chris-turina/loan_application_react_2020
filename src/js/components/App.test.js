import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('<App />', () => {
  const wrapper = render(<App />);
});
