
import {useParams} from "react-router-dom"
import React,{useState,useEffect} from "react"
import '../Styles/NewMovies.css';
import { getGenre } from '../Services/moviesServices'
import Movie from "../Components/Movie"
import Loading from "../Components/Loading";


function GenrePage() {
    const {name} = useParams()
    const {id} = useParams()
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        () => {
            const request = async ()=>{
                try{
                    const response = await getGenre(id)
                    setMovies(response.results)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
        },
        [id]
    )

    if ( loading ) {
        return <Loading />
    } else {
    return(
        <div className="Home">
            <div className="h2">
                <h2>Genero {name}:</h2>
            </div>
            <div className="NewMovies">
                {movies.map(movie=><Movie data={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}}

export default GenrePage