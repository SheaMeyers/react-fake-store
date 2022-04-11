import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import type { ProductType } from "../types";
import Product from "./Product";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  // Improvement: Could allow passing all product information
  //   to save an API call when coming from Lister page
  useEffect(() => {
    const initializeProduct = async () => {
      if (id) {
        const product = await getProductById(id);
        setProduct(product);
      }
    };

    initializeProduct();
  }, [id]);

  const handleAddProduct = () => {
    let products = window.localStorage.getItem("products") || "";
    window.localStorage.setItem("products", products + `${id},`);
    window.location.reload(); // TODO Consider a better way to do this
  };

  return (
    <>
      <h1>Product</h1>
      {product ? (
        <>
          <Product
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
          <Button variant="contained" onClick={(_) => handleAddProduct()}>
            Add to Cart
          </Button>
        </>
      ) : (
        <p>...loading</p>
      )}
    </>
  );
};

export default ProductDetail;
