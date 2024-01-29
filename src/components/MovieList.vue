<template>
    <router-link class-active="active" :to="'/details/'+ mv.id" v-for="mv in movies" class="movie-wrapper" :key="mv.id">
      <div class="movie-title">{{ mv.title }}</div>
      <img :src="`https://image.tmdb.org/t/p/w500${mv.poster_path}`" alt="...">
      <div class="movie-date">
        <PhCalendarBlank :size="20" color="#121212" />
        {{mv.release_date}}
      </div>
      <div class="movie-rating">
        <PhStar :size="20" />
        {{mv.vote_average}}
      </div>
    </router-link>
</template>

<script>
import {PhCalendarBlank, PhStar} from '@phosphor-icons/vue'
export default {
  props: ['movies'],
  components: {
    PhStar,
    PhCalendarBlank
  }
}
</script>

<style scoped>
.movie-wrapper {
  width: 200px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: #C2EABD;
  color: black;
  text-decoration: none;
}

img {
    width: 200px;
}

.movie-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-weight: bold;
}

.movie-date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.movie-rating {
  color: red;
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

@media screen and (max-width: 576px) {
    .movie-wrapper {
        width: 150px;
        height: 350px;
    }

    .movie-title {
        height: 40px;
        font-size: 12px;
    }

    img {
        width: 149px;
    }
}
</style>