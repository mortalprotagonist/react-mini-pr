import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import {searchMovies, getPopularMovies} from "../services/api.js"

 function Home(){
    
    const [SearchQuery,setSearchQuery] = useState("");
    const [movies, setMovies] =useState([]);
    const [error,setError] =useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async ()=> {
            try{
                const popularMovies =await getPopularMovies();
                setMovies(popularMovies)
            }catch (err) {
                console.log(err)
                setError("Failed to load movies....")
            }
            finally {}
            setLoading(false)
            }
        loadPopularMovies()
    }, []) //added content
    
    const handleSearch = (e) =>{
        e.preventDefault();
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


        {loading ? <div className="loading">Loading.....</div>}
        <div className="movie-grid">
            {movies.map((movie) => 
                //movie.title.toLowerCase().startsWith(SearchQuery) && 
                (<MovieCard movie={movie}/>)
            )}
        </div>
    </div>)
 }

export default Home