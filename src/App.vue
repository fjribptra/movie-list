<script>
  import {getMovieList, getMovieBySearch} from './api'
  import MyNavbar from '../components/MyNavbar.vue'
  import LoadingVue from '../components/Loading.vue'
  import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('../components/MovieList.vue')
)
  
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
          AsyncComp,
          LoadingVue
        }
    }
</script>

<template>
  <MyNavbar @meth="search"/>
  <div class="movie-container">
    <Suspense>
      <template #default>
        <AsyncComp :movies="movies"/>
      </template>
      <template #fallback>
        <LoadingVue/>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
  
</style>
