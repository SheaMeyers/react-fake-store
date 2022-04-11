import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import HeroPhoto from "../images/Hercules.jpeg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <AppBar position="static">
      <Link href="/">
        {/* TODO Remove style attribute and add css file */}
        <Avatar src={HeroPhoto} alt="Hero" className="Avatar" />
      </Link>
    </AppBar>
  );
};

export default Footer;
