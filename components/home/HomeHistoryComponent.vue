<template>
  <section class="history">
    <h3 class="history__headline">Our bakery's story starts from 1903.</h3>
    <p class="history__pgr">
      Family, the unique feeling of being together. Quality embeeded in a lifelong tradition.
      Friendship with our customers and our community. These are all ingredients that we
      incorporated in our business. Feel the taste of memories, reconnect with your past, and build
      the future with people you love the most. Relax with the deliciousness of our products and
      make your history with us!
    </p>
    <nuxt-link class="history__btn" to="/history">
      <q-btn class="btn" outline rounded color="white" label="Explore History" />
    </nuxt-link>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.history {
  font-family: $c-regular;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10% 0%;
  text-align: center;
  background-image: url('../../assets/images/history.webp');
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;

  &__headline {
    width: 90%;
    margin: 0 auto;
  }
  &__pgr {
    width: 80%;
    margin: 0 auto;
    font-size: clamp(1rem, 1rem + 2vw, 1.25rem);
    max-width: 800px;
  }

  &__btn {
    text-decoration: none;
    color: white;
    background-color: transparent;
  }
}

.btn {
  width: 60%;
  padding: 10px;
  font-weight: 700;
  @media screen and (min-width: 900px) {
    width: 40%;
  }
  @media screen and (min-width: 1300px) {
    width: 15%;
  }
}
.btn:hover {
  background-color: white !important;
  color: black !important;
  transition: 0.5s all;
}
</style>
