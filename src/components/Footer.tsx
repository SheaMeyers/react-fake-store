import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import HeroPhoto from "../images/Hercules.jpeg";

const Footer = () => {
    return (
        <AppBar position="static">
            <Link href='/'>
                <Avatar src={HeroPhoto} alt="Hero" />
            </Link>
        </AppBar>
    )
}

export default Footer;
