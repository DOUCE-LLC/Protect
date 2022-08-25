import React from "react"
import { Link } from 'react-router-dom';
import '../Styles/GenresPage.css';

function GenreCard(props){
    const {data} = props
    return(
        <Link className="GenreCard GenreCard__link" to={`/generos/${data.name}/${data.id}`} data-aos="zoom-in">
            <div className="GenreCard__title">
                <h3>{data.name}</h3>
            </div>
        </Link>
    )
}
export default GenreCard