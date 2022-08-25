import React from "react";
import '../Styles/Home.css';
import NewMovies from '../Components/NewMovies'
import Carrousel from '../Components/Carrousel'

function Home() {

    return (
        <>
        <Carrousel />
        <div className="Home">
            
            <div className="Home__popularMovies">
                <h2>Estrenos</h2>
                <NewMovies className="NewMovies" />
            </div>
        </div>
        </>
    ) 
}
export default Home