import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import ClothingPhoto from "../images/clothing.jpg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <AppBar position="static">
      <Link href="/">
        <Avatar src={ClothingPhoto} alt="Clothing" className="Avatar" />
      </Link>
    </AppBar>
  );
};

export default Footer;
