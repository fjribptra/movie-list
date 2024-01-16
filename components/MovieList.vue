<template>
    <div v-for="mv in movies" class="movie-wrapper" :key="mv.id">
      <div class="movie-title">{{ mv.title }}</div>
      <img :src="`https://image.tmdb.org/t/p/w200${mv.poster_path}`" alt="...">
      <div class="movie-date">{{mv.release_date}}</div>
      <div class="movie-rating">{{mv.vote_average}}</div>
    </div>
</template>

<script>
export default {
  props: ['movies']
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
  background-color: antiquewhite;
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

.movie-rating {
  color: red;
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
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
        width: 140px;
    }
}
</style>