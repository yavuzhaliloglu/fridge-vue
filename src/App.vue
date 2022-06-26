<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>

  <header>
    <Navbar />
  </header>

  <RouterView class="container" />

</template>

<style lang="scss">
@import '@/assets/base.css';

header {
  background: rgb(16, 10, 201);
}

</style>
