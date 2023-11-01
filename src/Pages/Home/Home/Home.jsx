import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import InfoSec from "../InfoSec/InfoSec";
import PopularProducts from "../PopularProducts/PopularProducts";
import Service from "../Service/Service";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <InfoSec></InfoSec>
            <PopularProducts></PopularProducts>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
        
    );
};

export default Home;