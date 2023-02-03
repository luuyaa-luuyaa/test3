import React from "react";
import Header from "./header"
import "./home.css"
import Banner from "./banner";
import Content from "./content";
const Home = () =>{
    return(
        <div className="home">
            <Header/>
            <div className="home1">
            <Banner/>
            <Content/>
            </div>
            
        </div>
    )
}
export default Home