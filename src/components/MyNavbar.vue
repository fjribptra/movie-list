<template>
  <header>
    <h1>
      <router-link class="link" class-active="active" to="/">Movie List Mania</router-link>
    </h1>
    <div class="search-wrapper">
      <input type="text" placeholder="Enter the movie name ..." @change="push($event)" />
      <button @click="push($event)">
        <ph-magnifying-glass :size="32"/>
      </button>
    </div>
  </header>
</template>

<script>
import {PhMagnifyingGlass} from '@phosphor-icons/vue'
export default {
  components: {
    PhMagnifyingGlass
  },
  methods: {
    push(e) {
      const keyword = e.target.value.toLowerCase()
      if(keyword.length < 3 || keyword.trim() === "") return
      this.$router.push(`/search/${keyword}`)
    }
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}

header {
  background-color: #0d1821;
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  gap: 20px;
}

h1 {
  text-decoration: none;
  font-size: 1.5rem;
}

input {
  width: 100%;
  max-width: 300px;
  font-weight: bold;
  padding: 1em 1.5em;
  background-color: white;
}

.search-wrapper {
  display: flex;
  gap: 10px;
}

button {
  border: none;
  padding: 0 1em;
  cursor: pointer;
  background-color: lightgreen;
  color: white;
  font-weight: bolder;
  transition: .3s all;
}

button:hover {
  color: black;
  background-color: white;
}

@media screen and (max-width: 576px) {
    header {
        flex-direction: column;
        padding: 1em 2em;
    }
    
    input{
        width: 100%;
        max-width: 250px;
    }
}
</style>
