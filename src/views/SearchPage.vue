<template>
    <div class="movie-container">
    <Suspense>
        <template #default>
            <AsyncComp :movies="movies"/>
        </template>
        <template #fallback>
            <LoadingVue />
        </template>
    </Suspense>
</div>
</template>

<script>
    import {getMovieList, getMovieBySearch} from '../api'
    import LoadingVue from '../../components/Loading.vue'
    import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => 
  import('../../components/MovieList.vue')
)
export default {
    data() {
            return {
                movies: [],
                parameter: this.$route.params.name
            }
        },
        methods: {
            async search() {
                // console.log(this.parameter)
                const movieBySearch = await getMovieBySearch(this.parameter)
                this.movies = movieBySearch.results
                // console.log(movieBySearch)
            }
        },
        mounted() {
            this.search()
        },
        beforeUpdate() {
            this.parameter = this.$route.params.name
        },
        updated() {
            this.search()
        },
    components: {
        AsyncComp,
        LoadingVue
    }
}
</script>