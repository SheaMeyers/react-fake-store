import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
  


const Lister = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const initializeProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };

        initializeProducts();
    }, [])

    return (
        <>
            <h1>Products</h1>
            {products.map((product: any) => {
                return (
                    <Link key={product.id} style={{ textDecoration: 'none' }} to={`/products/${product.id}`}>
                        <Product 
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                        />
                    </Link>
                )
            })}
            {products.length === 0 && <p>...loading</p>}
        </>
    )

}

export default Lister;
