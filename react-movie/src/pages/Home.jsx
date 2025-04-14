import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import {searchMovies, getPopularMovies} from "../services/api.js"

 function Home(){
    
    const [SearchQuery,setSearchQuery] = useState("");
    const [movies, setMovies] =([])
    
    useEffect(() => {},[])
    
    const handleSearch = () =>{
        //alert("Submitted")
    }; 

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for Movies...."
                    className="search-input"
                    value={SearchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
                <button type="" 
                    className="search-button">
                        Search
                </button>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => 
                //movie.title.toLowerCase().startsWith(SearchQuery) && 
                (<MovieCard movie={movie}/>)
            )}
        </div>
    </div>)
 }

export default Home