import '../Styles/Home.css';
import React,{useState,useEffect} from "react"
import { getGenres } from '../Services/moviesServices'
import GenreCard from './GenreCard';
import '../Styles/GenresPage.css';
import Loading from '../Components/Loading';

function GenresCards() {
    const [genres,setGenres] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        () => {
            const request = async ()=>{
                try{
                    const response = await getGenres()
                    setGenres(response.genres)
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

    if ( loading ) {
        return <Loading />
    } else {
    return (
        <div className="Home__genres">
            {genres.map(genre=><GenreCard data={genre} key={genre.id}/>)}
        </div>
    ) 
}}
export default GenresCards