import '../Styles/SearchPage.css';
import Movie from "../Components/Movie"
import React from "react"

function SearchPage(props) {

    return (
        <div className='SearchPage'>
            <div className="Home">
                <div className="NewMovies">
                    {props.movies && props.movies.map(movie=><Movie data={movie} key={movie.id}/>)}
                </div>
            </div>
        </div>

    );
}

export default SearchPage;