import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import HeroPhoto from "../images/Hercules.jpeg";
import CartPhoto from "../images/cart.png";
import "../Header.css";

const Header = () => {

    const getNumProducts = () => {
        let products = window.localStorage.getItem('products') || '';
        return products.split(',').length - 1;
    }

    return (
        <AppBar position="static" className="Header">
            <Link href='/'>
                <Avatar src={HeroPhoto} alt="Hero" className="Avatar"/>
            </Link>
            <Chip
                label="Products"
                component="a"
                href="/products"
                variant="outlined"
                clickable
            />
            <div className="Cart">
                <Avatar src={CartPhoto} alt="Hero" className="Avatar"/> 
                <h3>{getNumProducts()}</h3>
            </div>
        </AppBar>
    )
}

export default Header;
