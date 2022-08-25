import Footer from '../Components/Footer';
import Public from '../Routes/Public';
import {
  BrowserRouter as Router
} from "react-router-dom"
import { useEffect } from 'react';
import Aos from "aos";
import React,{useState} from 'react';
import Header from '../Components/Header';
import {searchMovie} from "../Services/moviesServices"

function App() {

  const [isLogin,setIsLogin] = useState(false)
  const [buscar,setBuscar] = useState('')
  const [movies,setMovies] = useState([])

  const handleChange = (event)=>{
    const value = event.target.value
    setBuscar(value)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(
    ()=>{
        const request = async ()=>{
            try{
                const response = await searchMovie(buscar)
                console.log(response)
                setMovies(response.results)
            }catch(e){
                console.log(e)
            }
            
        }
        request()
    },
    [buscar]
  )

  return (
    <div className="App">
      <Router>
        <Header isLogin={isLogin} buscar={buscar} handleChange={handleChange}/>
        <Public setIsLogin={setIsLogin} buscar={buscar} handleChange={handleChange} movies={movies}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;