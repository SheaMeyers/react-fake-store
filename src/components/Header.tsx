import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import HeroPhoto from "../images/Hercules.jpeg";
import "../Header.css";

// TODO Add type
const Header = (props: any) => {

    const getNumProducts = () => {
        let products = window.localStorage.getItem('products') || '';
        return products.split(',').length - 1;
    }

    return (
        <AppBar position="static" className="Header">
            <Link href='/'>
                <Avatar src={HeroPhoto} alt="Hero" />
            </Link>
            <Chip
                label="Products"
                component="a"
                href="/products"
                variant="outlined"
                clickable
            />
            <p>Num Products: {getNumProducts()}</p>
        </AppBar>
    )
}

export default Header;
