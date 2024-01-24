<script>
  import MyNavbar from '../components/MyNavbar.vue'
  import LoadingVue from '../components/Loading.vue'
  import { getMovieBySearch } from './libs/api'
  
export default {
  methods: {
    async search(e) {
                const movieBySearch = await getMovieBySearch(e.target.value)
                this.movies = movieBySearch.results
                console.log(movieBySearch)
            }
  },
    components: {
          MyNavbar,
          LoadingVue
        }
    }
</script>

<template>
    <MyNavbar @meth="search"/>
    <router-view/>
</template>

