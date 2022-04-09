import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Product from "./Product";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";

// TODO Add type here, should just be the ID of the product
const ProductDetail = (props: any) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null)

    // Improvement: Could allow passing all product information
    //   to save an API call when coming from Lister page
    useEffect(() => {
        const initializeProduct = async () => {
            if (id) {
                const product = await getProductById(id);
                setProduct(product);
            }
        }

        initializeProduct();
    }, [id]);

    const handleAddProduct = () => {
        let products = window.localStorage.getItem('products') || '';
        window.localStorage.setItem('products', products + `${id},`);
        window.location.reload(); // TODO Should be a better way to do this
    }

    return (
        <>
            <h1>Product</h1>
            {product ?
                <>
                    <Product 
                        image={(product as any).image}
                        title={(product as any).title}
                        price={(product as any).price}
                        category={(product as any).category}
                    />
                    <Button variant="contained" onClick={_ => handleAddProduct()}>Add to Cart</Button>
                </>
                :
                <p>...loading</p>
            }   
        </>
    )
}

export default ProductDetail;
