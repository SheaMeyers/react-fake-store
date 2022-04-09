import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';

test('renders initial home page', () => {
  render(<App />);
  const homeElement = screen.getByText("Home");
  const loadingElement = screen.getByText("...loading");
  expect(homeElement).toBeInTheDocument();
  expect(loadingElement).toBeInTheDocument();
});

test('renders home page with products', async () => {
  render(<App />);
  
  await waitFor(async () => {
    const fakeProduct1Element = screen.getByText("Fake product 1");
    expect(fakeProduct1Element).toBeInTheDocument();
  })

  await waitFor(async () => {
    const fakeProduct2Element = screen.getByText("Fake product 2");
    expect(fakeProduct2Element).toBeInTheDocument();
  })
});
