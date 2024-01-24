import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = 'c18932314685ccd2cc4221302a18e15b'

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