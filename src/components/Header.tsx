import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import CartPhoto from "../images/shoppingCart.jpg";
import ClothingPhoto from "../images/clothing.jpg";
import GithubPhoto from "../images/githubIcon.jpg";
import "../styles/Header.css";

const Header = () => {
  const getNumProducts = () => {
    let products = window.localStorage.getItem("products") || "";
    return products.split(",").length - 1;
  };

  return (
    <AppBar position="static" className="Header">
      <Link href="/">
        <Avatar src={ClothingPhoto} alt="Clothing" className="Avatar" />
      </Link>
      <Chip
        label="Products"
        component="a"
        href="/products"
        variant="outlined"
        className="Chip"
        clickable
      />
      <div className="Cart">
        <Avatar src={CartPhoto} alt="Cart" className="Avatar" />
        <h3>{getNumProducts()}</h3>
      </div>
      <Link 
        href="https://github.com/SheaMeyers/react-fake-store"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Avatar src={GithubPhoto} alt="Github" className="Avatar" />
      </Link>
    </AppBar>
  );
};

export default Header;
