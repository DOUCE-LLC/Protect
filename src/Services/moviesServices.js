export function get2022Movies() {
    return fetch("https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate") 
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export function getByIdProductos(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=756e1622851086c3d011b8461693b962&language=es-ES`)
    .then(res=>res.json())
}
// export function getAllProductos(buscar){
//     return fetch("https://api.mercadolibre.com/sites/MLA/search?q="+buscar)
//     .then(res=>res.json())
// }
export function getGenres() {
    return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=756e1622851086c3d011b8461693b962&language=es-ES") 
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export function getGenre(id) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc&primary_release_year=2019&with_genres='+id) 
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export function searchMovie(buscar) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=756e1622851086c3d011b8461693b962&query=${buscar}&page=1`) 
    .then(res=>res.json())
    .catch(error=>console.log(error))
}