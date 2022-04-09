import { rest } from "msw";

export const handlers = [
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: "Fake product 1",
          price: 100.01,
          category: "fake category 1",
        },
        {
          id: 2,
          title: "Fake product 2",
          price: 22,
          category: "fake category 2",
        },
      ])
    );
  }),

  rest.get("https://fakestoreapi.com/products/*", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        title: "Fake product 1",
        price: 109.95,
        category: "fake product 1",
      })
    );
  }),
];
