 import { createContext,useContext, useState, useEffect } from "react";

 const MovieContext= createContext()

 export const useMovieContext = () => useContext(MovieContext)

 export const MovieProvider = () => {}