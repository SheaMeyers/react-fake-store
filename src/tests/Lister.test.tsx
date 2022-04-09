import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Lister from "../components/Lister";
import { BrowserRouter } from "react-router-dom";

test("renders initial lister page", () => {
  render(
    <BrowserRouter>
      <Lister />
    </BrowserRouter>
  );
  const loadingElement = screen.getByText("...loading");
  expect(loadingElement).toBeInTheDocument();
});

test("renders lister page with products", async () => {
  render(
    <BrowserRouter>
      <Lister />
    </BrowserRouter>
  );

  await waitFor(async () => {
    const fakeProduct1Element = screen.getByText("Fake product 1");
    expect(fakeProduct1Element).toBeInTheDocument();
  });

  await waitFor(async () => {
    const fakeProduct2Element = screen.getByText("Fake product 2");
    expect(fakeProduct2Element).toBeInTheDocument();
  });
});
