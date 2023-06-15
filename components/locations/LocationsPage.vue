<template>
  <div class="limiter">
    <SharedMainNavInfo
      page-name="Our Locations Worldwide"
      route-name="locations"
    ></SharedMainNavInfo>
    <main class="locations-container">
      <LocationsCard
        v-for="location in locations"
        :address="location.address"
        :city-name="location.cityName"
        :average-rating="location.averageRating"
        :customers="location.customers"
        :image="location.image"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
const { data: locations } = await useFetch('/api/getLocations');
</script>

<style lang="scss" scoped>
@use '../assets/styles/abstracts/variables' as *;

.limiter {
  width: 80%;
  margin: 0 auto;
}
.locations-container {
  font-family: $c-regular;
  margin: clamp(2rem, 2rem + 10vw, 5rem) auto;

  display: grid;
  gap: 3rem;
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: 85%;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, 300px);
  }
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  text-align: center;
}
</style>
