<template>
    <Suspense>
      <template #default>
        <div style="padding: 0;">
            <div class="wrapper">
                <nav>
                    <h3>Popular</h3>
                    <router-link to="/popular">See all</router-link>
                </nav>
            </div>
            <div class="movie-container" style="margin-top: 0;">
                <AsyncComp :movies="movies" />
            </div>
        </div>
      </template>
      <template #fallback>
        <div class="movie-container">
            <LoadingVue />
        </div>
      </template>
    </Suspense>
</template>

<script>
import { getMovieList } from "../libs/api";
import { scrollTop } from "../libs/scrollTop";
import LoadingVue from "../components/Loading.vue";
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => import("../components/MovieList.vue"));
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async getPopularMovies() {
      const popularMovies = await getMovieList(1);
      this.movies = popularMovies;
    },
  },
  mounted() {
    this.getPopularMovies();
    scrollTop();
  },
  components: {
    AsyncComp,
    LoadingVue,
  },
};
</script>

<style scoped>
    .wrapper {
        margin-top: 60px;
        width: 100vw;
        background-color: antiquewhite;
    }   

    nav {
        display: flex;
        justify-content: space-between;
        padding: 1em 2em;
    }
</style>