import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getProductById } from "../api";
import type { ProductType } from "../types";
import Product from "./Product";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
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
          <Button 
            variant="contained" 
            onClick={(_) => dispatch({ type: "ADD_PRODUCT", payload: product })}
          >
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
