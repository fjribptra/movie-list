<template>
    <div class="wrapper">
        <nav>
            <h3>{{title}}</h3>
            <router-link v-if="navigation && navigationHref" active-class="active" class="link" :to="navigationHref">{{ navigation }}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        navigation: String,
        navigationHref: String
    }
}
</script>

<style scoped>
    .wrapper {
        width: 100vw;
        background-color: #465362;
        color: #fff;
    }   

    .link {
      text-decoration: none;
      color: #C2EABD;
    }
    nav {
        display: flex;
        justify-content: space-between;
        padding: 1em 2em;
    }
</style>