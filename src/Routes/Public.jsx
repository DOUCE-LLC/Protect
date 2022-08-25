import MainPage from '../Pages/MainPage'
import IntroPage from '../Pages/IntroPage'
import IniciarPage from '../Pages/IniciarPage'
import RegistroPage from '../Pages/RegistroPage'
import GenresPage from '../Pages/GenresPage'
import GenrePage from '../Pages/GenrePage'
import MoviePage from '../Pages/MoviePage'
import SearchPage from '../Pages/SearchPage'
import { Routes,Route} from "react-router-dom"
import NotFoundPage from '../Pages/NotFoundPage';

function Public(props) {

  return (
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/inicio' element={<IniciarPage setIsLogin={props.setIsLogin}/>} />
        <Route path='/registro' element={<RegistroPage setIsLogin={props.setIsLogin}/>} />
        <Route path='/menu' element={<MainPage />}/>
        <Route path='/buscar' element={<SearchPage buscar={props.buscar} handleChange={props.handleChange} movies={props.movies} />} />
        <Route path='/generos' element={<GenresPage />}/>
        <Route path='/generos/:name/:id' element={<GenrePage />}/>
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}
 
export default Public;
