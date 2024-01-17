<template>
  <div class="movie-container">
    <Suspense>
      <template #default>
        <AsyncComp :movies="movies" />
      </template>
      <template #fallback>
        <LoadingVue />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { getMovieList, getMovieBySearch } from "../libs/api";
import LoadingVue from "../../components/Loading.vue";
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => import("../../components/MovieList.vue"));
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async get() {
      const lists = await getMovieList();
      this.movies = lists;
    },
  },
  mounted() {
    this.get();
  },
  components: {
    AsyncComp,
    LoadingVue,
  },
};
</script>
