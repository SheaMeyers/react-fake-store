import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import BoyPhoto from "../images/boy.jpg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <AppBar position="static">
      <Link href="/">
        <Avatar src={BoyPhoto} alt="Hero" className="Avatar" />
      </Link>
    </AppBar>
  );
};

export default Footer;
