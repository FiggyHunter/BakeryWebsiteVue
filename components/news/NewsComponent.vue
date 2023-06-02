<template>
  <article class="news">
    <nuxt-img alt="news image" loading="lazy" :src="imageUrl" class="news__image"></nuxt-img>
    <article class="news__content">
      <h4 class="news__content__headline">{{ headline }}</h4>
      <hr class="news__content__line" />
      <p class="news__content__pgr">{{ content }}</p>
    </article>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  headline: String,
  content: String,
  imageUrl: String,
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.news {
  font-family: $c-regular;
  display: grid;
  align-items: center;
  margin-bottom: 3rem;
  &__image {
    border: solid 5px #002b50;
  }
  gap: 2rem;
  img {
    max-height: 100%;
    object-fit: contain;
    @media screen and (min-width: 700px) {
      width: 100%;
      place-self: center;
    }
    @media screen and (min-width: 900px) {
      width: 100%;
      place-self: center;
      gap: 4rem;
    }
    @media screen and (min-width: 1200px) {
      width: 80%;
    }
  }
  @media screen and (min-width: 700px) {
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 1100px) {
    margin-bottom: 8rem;
  }

  grid-template-columns: 1fr;
  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__headline {
      font-size: clamp(1rem, 0.7rem + 2.5vw, 1.75rem);
      line-height: 1.75rem;
      font-family: $c-bold;
    }

    &__pgr {
      font-size: clamp(0.7rem, 0.6rem + 1vw, 1.2rem);
    }

    &__line {
      width: 20%;
      background-color: #f9b600;
      height: 1px;
      border: none;
    }
  }
}
</style>
-
