import React from "react";

// TODO Add type to props
const Product = (props: any) => {
    return (
        <div>
            <p>-------------------</p>
            <p>Image {props.image}</p>
            <p>Title {props.title}</p>
            <p>Price {props.price}</p>
            <p>Category {props.category}</p>
            <p>-------------------</p>
        </div>
    )
}

export default Product;
