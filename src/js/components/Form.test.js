import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, cleanup, fireEvent } from '@testing-library/react';


afterEach(cleanup);

const onSubmit = jest.fn();

test('<Form />', () => {
  const { debug, getByTestId, container, getByText } =render(<Form handleSubmit={onSubmit}/>);
  expect(getByTestId('application-title').textContent).toBe('Loan Application');
  fireEvent.click(getByText('Submit'));

  expect(onSubmit).toHaveBeenCalledTimes(1);


})
