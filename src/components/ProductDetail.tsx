import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Product from "./Product";
import { useParams } from "react-router-dom";

// TODO Add type here, should just be the ID of the product
const ProductDetail = (props: any) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null)

    // Improvement: Could pass allow passing all product information
    //   to save an API call when coming from Lister page
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }, [props.id]);

    return (
        <>
            {product && 
                <>
                <Product 
                    image={(product as any).image}
                    title={(product as any).title}
                    price={(product as any).price}
                    category={(product as any).category}
                />
                <Button variant="contained">Add to Cart</Button>
                </>
            }   
        </>
    )
}

export default ProductDetail;
