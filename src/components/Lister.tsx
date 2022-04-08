import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
  


const Lister = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <>
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
        </>
    )

}

export default Lister;
