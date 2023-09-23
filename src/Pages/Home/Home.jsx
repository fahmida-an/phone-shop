import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
          
        </div>
    );
};

export default Home;