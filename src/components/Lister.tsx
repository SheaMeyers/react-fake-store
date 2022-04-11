import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
import Product from "./Product";
import "../styles/Lister.css";

import { ProductType } from "../types";

const Lister = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const initializeProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    initializeProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      {products.map((product: ProductType) => {
        return (
          <Link
            key={product.id}
            className="Link"
            to={`/products/${product.id}`}
          >
            <Product
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          </Link>
        );
      })}
      {products.length === 0 && <p>...loading</p>}
    </>
  );
};

export default Lister;
