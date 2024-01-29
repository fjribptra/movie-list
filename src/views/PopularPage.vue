<template>
  <Suspense>
    <template #default>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <div class="movie-container">
          <Header :title="`The Most Popular Movies #${page}`" />
          <AsyncComp :movies="movies" />
        </div>
        <Pagination :page="page" @onPrev="prevPage" @onNext="nextPage" />
      </div>
    </template>
    <template #fallback>
      <LoadingVue />
    </template>
  </Suspense>
</template>

<script>
import { getMovieList } from "../libs/api";
import LoadingVue from "../components/Loading.vue";
import { defineAsyncComponent } from "vue";
import Pagination from "../components/Pagination.vue";
import Header from "../components/Header.vue";

const AsyncComp = defineAsyncComponent(() => import("../components/MovieList.vue"));
export default {
  data() {
    return {
      movies: [],
      page: 1,
    };
  },
  methods: {
    async get() {
      const lists = await getMovieList(this.page);
      this.movies = lists;
    },
    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    },
  },
  mounted() {
    this.get();
  },
  updated() {
    this.get();
  },

  components: {
    AsyncComp,
    LoadingVue,
    Pagination,
    Header
  },
};
</script>
