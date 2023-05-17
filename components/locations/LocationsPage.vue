<template>
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
</template>

<script setup lang="ts">
const locations = [
  {
    cityName: 'Sydney',
    address: '1 Oxford St, Darlinghurst NSW 2010, Australia',
    image: 'sydney.webp',
    customers: 545,
    averageRating: 4.7,
  },
  {
    cityName: 'New York',
    address: '350 Fifth Avenue New York, NY 10118, United States',
    image: 'newyork.webp',
    customers: 465,
    averageRating: 4.9,
  },
  {
    cityName: 'Rio de Janeiro',
    address: 'Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001, Brazil',
    image: 'riodejaneiro.webp',
    customers: 311,
    averageRating: 4.3,
  },
  {
    cityName: 'Tokyo',
    address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan',
    image: 'tokyo.webp',
    customers: 628,
    averageRating: 4.8,
  },
  {
    cityName: 'Cairo',
    address: 'Great Pyramid of Giza, Al Haram, Nazlet El-Semman, Al Haram, Giza Governorate, Egypt',
    image: 'cairo.webp',
    customers: 254,
    averageRating: 4.5,
  },
  {
    cityName: 'Barcelona',
    address: 'Plaça de la Sagrada Família, s/n, 08013 Barcelona, Spain',
    image: 'barcelona.webp',
    customers: 409,
    averageRating: 4.7,
  },
  {
    cityName: 'Sarajevo',
    address: 'Obala Isa-bega Ishakovica 3, Sarajevo 71000, Bosnia and Herzegovina',
    image: 'sarajevo.webp',
    customers: 584,
    averageRating: 4.6,
  },
  {
    cityName: 'Sydney',
    address: '1 Oxford St, Darlinghurst NSW 2010, Australia',
    image: 'sydney.webp',
    customers: 520,
    averageRating: 4.8,
  },
  {
    cityName: 'Paris',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    image: 'paris.webp',
    customers: 693,
    averageRating: 4.9,
  },
  {
    cityName: 'Johannesburg',
    address: '301 9th St, Johannesburg 2094, South Africa',
    image: 'johannesburg.webp',
    customers: 316,
    averageRating: 4.4,
  },
];
</script>

<style lang="scss" scoped>
@use '../assets/styles/abstracts/variables' as *;
.locations-container {
  font-family: $c-regular;
  margin: 6rem auto;
  @media screen and (min-width: 700px) {
    margin: 9rem auto;
  }
  @media screen and (min-width: 1300px) {
    margin: 12rem auto;
  }
  display: grid;
  gap: 5rem;
  width: 95%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  text-align: center;
}
</style>

const cityNames = ["Johannesburg", "Tokyo", "Cairo", "Sydney", "Paris", "Barcelona", "New York",
"Rio de Janeiro", "Sarajevo", "Melbourne"];
