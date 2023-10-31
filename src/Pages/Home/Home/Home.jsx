import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import InfoSec from "../InfoSec/InfoSec";
import PopularProducts from "../PopularProducts/PopularProducts";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <InfoSec></InfoSec>
            <PopularProducts></PopularProducts>
            <Team></Team>
            This is home component
        </div>
        
    );
};

export default Home;