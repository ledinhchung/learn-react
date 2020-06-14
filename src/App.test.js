import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render Hello world', () => {
  const { getByText } = render(<App />);
  const hello_world = getByText(/Hello world/i)
  expect(hello_world).toBeInTheDocument();
})

test('Init count value is 0', () => {
  const { getByTitle } = render(<App />);
  const counter = getByTitle('counter');
  expect(counter.textContent).toEqual('0')
})

test('Click button was render', () => {
  const { getByTitle } = render(<App />)
  const button = getByTitle('count_btn')
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
  const counter = getByTitle('counter');
  expect(counter.textContent).toEqual('1')
})
