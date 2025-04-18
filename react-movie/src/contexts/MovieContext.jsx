 import { createContext,useContext, useState, useEffect } from "react";

 const MovieContext= createContext()

 export const useMovieContext = () => useContext(MovieContext)

 export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = ([])

    useEffect(() => {
        const storedFavs= localStorage.getItem("favorites");
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])
    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])


    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
 }