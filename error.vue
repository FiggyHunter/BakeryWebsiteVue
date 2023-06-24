<template>
  <main class="error">
    <img src="./assets/images/error.webp" alt="" srcset="" />
    <h1>Oops... we can't find that! :( </h1>
    <nuxt-link class="link" to="/">GO HOME</nuxt-link>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use './assets/styles/abstracts/variables' as *;
.error {
  font-family: $c-bold;
  height: 100svh;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  grid-template-columns: 1fr;
  align-content: center;
  place-items: center;
  img {
    width: 30%;
  }

  h1 {
    font-size: clamp(1rem, 1rem + 1vw, 2rem);
  }
  .link {
    text-decoration: none;
    color: #f9b600;
    padding: 1rem 2rem;
    font-family: $c-black;
    background-color: #002559;
    transition: transform 0.3s;
    &:hover {
      transform: scale(0.9);
    }
  }
}
</style>
