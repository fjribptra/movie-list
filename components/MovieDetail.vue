<template>
        <div class="wrapper">
            <div class="image-wrapper">
                <img :src="`https://image.tmdb.org/t/p/w200${detailMovie.poster_path}`" alt="..">

            </div>
            <div class="detail-wrapper">

                <h1>{{ detailMovie.title }}</h1>
                <span>
                    <p v-if="detailMovie.tagline">{{detailMovie.tagline}}</p>
                    <p v-else>No tagline</p>
                </span>
    
                <h3 class="released">
                    <PhCheckCircle :size="25" color="#121212" />
                    {{ detailMovie.status }}
                </h3>
                <h3>
                    <PhCalendarBlank :size="25" color="#121212" />
                    {{ detailMovie.release_date }}
                </h3>
                <h3 class="rating">
                    <PhStar :size="25" color="#121212" />
                    {{ detailMovie.vote_average }}
                </h3>
                <p>{{ detailMovie.overview }}</p>
                <button @click="$router.back">Back</button>
            </div>
        </div>
</template>

<script>
import {PhCalendarBlank, PhStar, PhCheckCircle} from '@phosphor-icons/vue'
export default {
    props: ['detailMovie'],
    components: {
        PhCalendarBlank,
        PhStar,
        PhCheckCircle
    }
}
</script>

<style scoped>

    .wrapper {
        display: grid;
        grid-template-columns:  1fr 3fr;
        padding: 2em;
    }

    .image-wrapper {
        background-color: gray;
        height: 500px;
    }

    .detail-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 2em;
        text-align: left;
    }

    h1 {
        color: black;
        font-size: 2.5rem;
    }

    h3 {
        display:flex;
        align-items: center;
        gap: 5px;
        color: rgba(172, 14, 193, 0.862);
    }

    .released {
        color: green;
    }

    .rating {
        color: red;
    }

    p {
        font-weight: bolder;
        color: rgba(74, 68, 68, 0.822);
    }

    img {
        width: 100%;
        height: 100%;
    }

    button {
        border: none;
        padding: 1em;
        background-color: green;
        font-weight: bolder;
        color: white;
    }

    @media screen and (max-width: 576px) {
        .wrapper {
            display: flex;
            flex-direction: column;
        }

        .detail-wrapper {
            padding: .5em;
        }
        
    }
</style>