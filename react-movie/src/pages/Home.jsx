import { useState } from "react";
import MovieCard from "../components/MovieCard"

 function Home(){
    
    const [SearchQuery,setSearchQuery] = useState("");

    const movies=[
        {id:1, title:"Tenet", release_date:2020 },
        {id:2, title:"Mission Impossible", release_date:2023 },
        {id:3, title:"Avatar", release_date:2026 }
    ]
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
                movie.title.toLowerCase().startsWith(SearchQuery) && 
                (<MovieCard movie={movie}/>)
            )}
        </div>
    </div>)
 }

export default Home