import { defineStore } from 'pinia'
import { getMovieList } from '../src/api'
import { ref } from 'vue'

export const useMovieStore = defineStore('counter', () => {
    const movies = ref([])
    const listMovies = computed(() => movies = getMovieList())
  
    return { movies, listMovies }
  })