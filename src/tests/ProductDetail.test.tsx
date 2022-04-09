import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "../components/ProductDetail";
import Router, { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
})

test("renders initial product detail page", () => {
  render(
    <BrowserRouter>
      <ProductDetail />
    </BrowserRouter>
  );
  const loadingElement = screen.getByText("...loading");
  expect(loadingElement).toBeInTheDocument();
});

test("renders product detail page with product and button", async () => {
  console.log("in test");

  render(
    <BrowserRouter>
      <ProductDetail />
    </BrowserRouter>
  );

  await waitFor(async () => {
    const fakeProduct1Element = screen.getByText("Fake product 1");
    expect(fakeProduct1Element).toBeInTheDocument();
  });

  await waitFor(async () => {
    const addToCartButton = screen.getByText(/Add to Cart/i);
    expect(addToCartButton).toBeInTheDocument();
  });
});
