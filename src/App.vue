<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <header>
    <nav class="container">
      <div class="navbrand">
        <RouterLink class="brand" to="/">LoremIpsum</RouterLink>
      </div>

      <div class="navlinks">
        <RouterLink class="navlink" to="/">Home</RouterLink>
        <RouterLink class="navlink" to="/form">Form</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView class="container" />

</template>

<style lang="scss">
@import '@/assets/base.css';

header {
  background: rgb(16, 10, 201);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 25px;

  & a {
    text-decoration: none;
    color: white;
    margin: 0 8px;
    transition: .4s ease all;

    &:hover {
      color: white;
    }
  }

  .navlink {
    font-size: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 2px;
      background-color: white;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: scaleX(0);
      transition: .4s ease;
      transform-origin: left;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  .brand {
    font-size: 30px;

    &:hover {
      color: #999;
    }
  }
}
</style>
