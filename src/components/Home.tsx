import Lister from "./Lister";
import HeroPhoto from "../images/Hercules.jpeg";

const Home = () => {
    return (
        <>
            <img src={HeroPhoto} alt="Hero" height="900" />
            <Lister />
        </>
    )
}

export default Home;
