import AppBar from '@mui/material/AppBar';

// TODO Add type
const Header = (props: any) => {

    const getNumProducts = () => {
        let products = window.localStorage.getItem('products') || '';
        return products.split(',').length - 1;
    }

    return (
        <AppBar position="static">
            <p>This is the header</p>
            <p>Num Products: {getNumProducts()}</p>
        </AppBar>
    )
}

export default Header;
