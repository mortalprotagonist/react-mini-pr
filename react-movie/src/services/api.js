const API_KEY="90224d9056b6a21c9f0f33e198371e4e"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}