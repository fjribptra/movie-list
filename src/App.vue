<script>
  import {getMovieList, getMovieBySearch} from './api'
  import MyNavbar from '../components/MyNavbar.vue'
  import MovieList from '../components/MovieLIst.vue'

export default {
        data() {
            return {
                movies: [],
            }
        },
        props: ['mvLists'],
        methods: {
            async get() {
                const lists = await getMovieList()
                this.movies = lists
            },
            async search(e) {
                const movieBySearch = await getMovieBySearch(e.target.value)
                this.movies = movieBySearch.results
                console.log(movieBySearch)
            }
        },
        mounted() {
            this.get()
        },
        components: {
          MyNavbar,
          MovieList
        }
    }
</script>

<template>
  <MyNavbar @meth="search"/>
  <div class="movie-container">
    <MovieList :movies="movies"/>
  </div>
</template>

<style scoped>
  
</style>
