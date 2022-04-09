import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { ProductType } from "../types";


const Product = (props: ProductType) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Avatar alt={`${props.title} Image`} src={`${props.image}`} />
                <h3>{props.title}</h3>
                <h4>€{props.price}</h4>
                <p>Category: {props.category}</p>
            </CardContent>
        </Card>
    )
}

export default Product;
