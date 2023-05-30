<template>
  <section class="grid-images">
    <HomeImageComponent
      card-title="News from the Oven >"
      image-link="url(https://cdn.pixabay.com/photo/2016/11/29/08/24/bakery-1868396_1280.jpg)"
      link-to="/news"
    />
    <HomeImageComponent
      card-title="Shop Locations >"
      image-link="url(https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
      link-to="/locations"
    />
    <HomeImageComponent
      card-title="Explore Products >"
      image-link="url(https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)"
      link-to="/products"
    />
    <HomeImageComponent
      card-title="History >"
      image-link="url(https://i.pinimg.com/originals/39/b5/e4/39b5e46f65e6783e4cb52f0edd2a3bfb.jpg)"
      link-to="/history"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.grid-images {
  display: grid;
  grid-template-columns: 300px;
  padding: 100px 0px;
  justify-content: center;
  width: 100%;
  margin: -0.7rem auto;
  background-color: antiquewhite;
  gap: 3rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: 300px 300px;
  }

  @media screen and (min-width: 1250px) {
    grid-template-columns: repeat(2, 500px);
    gap: 5rem;
  }
}
</style>
