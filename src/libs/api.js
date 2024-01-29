import axios from "axios";

const baseUrl = import.meta.env.VITE_VUE_APP_BASE_URL
const apiKey = import.meta.env.VITE_VUE_APP_API_KEY

export const getMovieList = async (page) => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=${page}&api_key=${apiKey}`)
    return movie.data.results
}

export const getMovieBySearch = async (q) => {
    const searchMovie = await axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
    return searchMovie.data
}

export const getMovieDetail = async (id) => {
    const detailMovie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
    return detailMovie.data
}