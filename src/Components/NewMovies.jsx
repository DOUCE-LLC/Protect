import React,{useState,useEffect} from "react"
import Movie from "./Movie"
import { get2022Movies } from '../Services/moviesServices'
import '../Styles/NewMovies.css';
import Loading from './Loading';


function NewMovies() {
    const [loading,setLoading] = useState(true)
    const [movies,setMovies] = useState([])

    useEffect(
        () => {
            const request = async ()=>{
                try{
                    const response = await get2022Movies()
                    setMovies(response.results)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
        },
        []
    )

    if (loading) {
        return <Loading />
    } else {

    return (
        <div className="NewMovies">
            {movies.map(movie=><Movie data={movie} key={movie.id}/>)}
        </div>
    ) 
}}
export default NewMovies