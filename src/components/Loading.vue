<template>
    <div class="wrapper">
        <div class="custom-loader"></div>
    </div>
</template>

<style scoped>
    .wrapper {
        width: 100%;
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .custom-loader {
        width:50px;
        height: 50px;
        border-radius:50%;
        border:8px solid;
        border-color:#F5F5FF;
        border-right-color: #F4F46F;
        animation:s2 0.5s infinite linear;
    }
        @keyframes s2 {to{transform: rotate(1turn)}}
</style>