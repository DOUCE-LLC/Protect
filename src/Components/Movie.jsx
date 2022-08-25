import React from "react"
import { Link } from 'react-router-dom';
import '../Styles/Movie.css';

function Movie(props){
    const {data} = props
    return(
        <Link to={`/movie/${data.id}`} className='Movie' data-aos="zoom-in">
            <img className="Movie__img" alt="poster" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
        </Link>
    )
}
export default Movie