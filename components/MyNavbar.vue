<template>
  <header>
    <h1>MOVIE LIST MANIA</h1>
    <input type="text" placeholder="Enter the movie name ..." @change="$emit('meth', $event)" />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
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
  color: white;
  font-size: 1.5rem;
}

input {
  width: 100%;
  max-width: 300px;
  font-weight: bold;
  padding: 1em 1.5em;
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
