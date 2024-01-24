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
import { getMovieBySearch } from "../libs/api";
import { scrollTop } from "../libs/scrollTop";
import LoadingVue from "../../components/Loading.vue";
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => import("../../components/MovieList.vue"));
export default {
  data() {
    return {
      movies: [],
      parameter: this.$route.params.name,
    };
  },
  methods: {
    async search() {
      const movieBySearch = await getMovieBySearch(this.parameter);
      this.movies = movieBySearch.results;
    },
  },
  mounted() {
    this.search();
    scrollTop()
},
beforeUpdate() {
    this.parameter = this.$route.params.name;
},
updated() {
    this.search();
  },
  components: {
    AsyncComp,
    LoadingVue,
  },
};
</script>
