<template>
    <div style="color: white; font-size: 1.2em; display:flex; gap: 10px; justify-content: center; align-items: center">
            <button class="prev-button" v-if="page > 1" @click="$emit('onPrev')">prev</button>
            <p>{{page}} / 500</p>
            <button class="next-button" v-if="page < 500" @click="$emit('onNext')">next</button>
    </div>
</template>

<script>
export default {
    props: ['page']
}
</script>

<style scoped>
  button {
    border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    color: white;
  }
</style>