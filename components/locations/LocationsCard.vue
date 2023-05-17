<template>
  <div class="locations">
    <div class="locations__card">
      <div class="location__image-ctr">
        <img class="locations__image" :src="`${base}/${image}`" alt="" srcset="" />
      </div>
      <h1 class="locations__headline">{{ cityName }}</h1>
      <p class="locations__pgr"> {{ address }}</p>
      <div class="locations__data">
        <div class="locations__data-1"
          ><h3 class="locations__data__headline">{{ customers }}</h3>
          <h5 class="locations__data__sub">Daily Customers</h5></div
        >
        <div class="locations__data-2"
          ><h3 class="locations__data__headline">{{ averageRating }}</h3>
          <h5 class="locations__data__sub">Average Rating</h5></div
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().imagesBase;
defineProps({
  cityName: String,
  address: String,
  image: String,
  customers: Number,
  averageRating: Number,
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.locations {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 80% 80%;
  }

  &__card {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 60px 70px 100px;
    place-content: center;
    border-radius: 1rem;
    background-color: #002559;
    border: 3px solid black;
    h1 {
      line-height: 2rem;
      align-self: center;
    }
  }

  &__headline {
    margin: 0;
    color: white;
  }

  &__pgr {
    color: white;
    width: 80%;
    margin: 0 auto;
  }

  &__data {
    display: grid;
    height: 100%;
    align-items: end;
    background-color: #002559;
    border-top: 1px solid #f9b600;
    color: #f9b600;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 1rem;
    &__headline {
      font-size: 2rem;
      font-weight: 900;
    }

    &__sub {
      font-size: 1rem;
      font-weight: 900;
      color: white;
    }

    h5 {
      line-height: 1rem;
    }
  }

  &__data-1 {
    border-right: 1px solid #f9b600;
  }
}
</style>
