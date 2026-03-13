import Footer from "../Footer";
import Navbar from "../Navbar";
import Discover from "./Discover";
import Find from "./Find";
import Hero from "./Hero";
import SearchFilter from "./SearchFilter";


export default function HomePage(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <SearchFilter/>
        <Discover/>
        <Find/>
        <Footer/>
        
        </>
    );
}