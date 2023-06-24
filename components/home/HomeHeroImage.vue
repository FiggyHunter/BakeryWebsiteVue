<template>
  <section>
    <img class="image" src="../../assets/images/coverBread.webp" alt="breads on a shelf" />
    <div class="home-hero-content">
      <h1 class="headline"
        >Explore our delicious products<span class="yellow">,</span> <br />
        straight from the oven<span class="yellow">!</span></h1
      >
      <nuxt-link class="link" to="/products">Discover Products</nuxt-link>
    </div>
    <img
      class="arrow"
      src="../../assets/images/down-arrow-svgrepo-com.svg"
      alt="arrow pointing
    down"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

section {
  display: grid;
}
.image {
  object-fit: cover;
  filter: brightness(50%);
  height: 100svh;
  @media screen and (min-width: 900px) {
    height: 100vh;
  }
  width: 100vw;
}

.home-hero-content {
  position: absolute;
  place-self: end center;
  padding-left: 1rem;

  @media screen and (min-width: 700px) {
    place-self: center;
    text-align: center;
  }
  color: white;
  margin-bottom: 1rem;

  .headline {
    font-family: $c-black;
    line-height: 1.2;
    font-size: 1.75rem;
    @media screen and (min-width: 700px) {
      font-size: 3rem;
    }
  }
  .link {
    text-decoration: none;
    color: white;
    font-family: $c-regular;
    border: 2px solid #f9b600;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    transition: color, background 0.3s;
    &:hover,
    &:focus {
      color: #002559;
      background-color: #f9b600;
      border: 2px solid black;
    }
  }
}
.arrow {
  position: absolute;
  place-self: end;
  width: 60px;
  height: 60px;
  margin-bottom: 5rem;
  animation: up-down 2s ease infinite;
  @media screen and (min-width: 1200px) {
    justify-self: center;
    margin-bottom: 2rem;
  }
}

.yellow {
  color: #f9b600;
}

@keyframes up-down {
  0% {
    transform: translateY(-15px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(-15px);
  }
}
</style>
