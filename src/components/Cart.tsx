import { useSelector } from "react-redux"
import { ReduxState } from "../redux"
import { ProductType } from "../types"
import Product from "./Product"

const Cart = () => {
    const products = useSelector<ReduxState, ReduxState["products"]>(
        (state) => state.products
    )

    return (
        <>
            <h1>Cart</h1>
            {products.map((product: ProductType) => {
                return (
                    <Product
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                );
            })}
            {products.length === 0 && <p>Your cart is empty</p>}
        </>
    );
};

export default Cart;
