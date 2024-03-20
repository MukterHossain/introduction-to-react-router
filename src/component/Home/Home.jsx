import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    const locate = useLocation();
    console.log(locate)
    return (
        <div>
            <Header></Header>
            <h2>This is a Home page</h2>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;