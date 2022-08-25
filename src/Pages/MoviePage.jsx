import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../Services/moviesServices"
import '../Styles/MoviePage.css';
import Loading from '../Components/Loading';

function DetallePage() {

    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    console.log("Id",id)
    const [producto,setProducto] = useState({})

    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProductos(id)
                    console.log("response",response)
                    setProducto(response)
                }
                request()
                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            }catch(e){
                console.log(e)
                setLoading(false)
            }
        },
        [id]
    )

    if ( loading ) {
        return <Loading />
    } else {
    return(
        <div className="MoviePage__container">
        <div className="MoviePage ">
            <div className="MoviePage__img">
                <img alt="" src={`https://image.tmdb.org/t/p/w500${producto.poster_path}`} data-aos="fade-right"/> 
            </div>
            <div className="MoviePage__texts" data-aos="zoom-in">
                <h2>{producto.title}</h2>
                <h3>{producto.tagline}</h3>
                <h4>Min. {producto.runtime}</h4> 
                <h4>{producto.release_date}</h4>
                <h5 id="calificacion">Calificacion: {producto.vote_average}</h5>
                <h5>Participacion: {producto.vote_count}</h5>
                <p>{producto.overview}</p>
            </div>
        </div>
        </div>
    )
}}

export default DetallePage