<template>
  <div>
    <Suspense>
      <template #default>
        <AsyncComp :detailMovie="detailMovie" />
      </template>
      <template #fallback>
        <LoadingVue />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { getMovieDetail } from "../libs/api";
import {scrollTop} from "../libs/scrollTop"
import LoadingVue from "../../components/Loading.vue";
import MovieDetail from "../../components/MovieDetail.vue";

import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => import("../../components/MovieDetail.vue"));

export default {
  data() {
    return {
      movieId: this.$route.params.id,
      detailMovie: [],
    };
  },
  methods: {
    async getDetail() {
      const detail = await getMovieDetail(this.movieId);
      this.detailMovie = detail;
      console.log(this.detailMovie);
    },
  },
  components: {
    AsyncComp,
    LoadingVue,
  },
  mounted() {
    this.getDetail();
    scrollTop()
  },
};
</script>

<style scoped>
div {
  width: 100vw;
  padding: 2em 0em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  background-color: antiquewhite;
}
</style>
