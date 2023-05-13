<template>
  <section class="instagram">
    <nuxt-link target="_" style="text-decoration: none" to="https://www.instagram.com"
      ><h3 class="instagram__headline">@OurBakery</h3></nuxt-link
    >
    <div class="instagram__pictures">
      <nuxt-link target="_" to="https://www.instagram.com" v-for="n in 5" :key="n"
        ><nuxt-img
          format="webp"
          :src="imageLinks[n - 1]"
          loading="lazy"
          :class="[`instagram__picture`, `pic-${n}`]"
          fit="fill"
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const imageLinks = [
  'https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7440350/pexels-photo-7440350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.mylazy {
  height: 300px;
  width: 300px;
}
.instagram {
  padding: 5% 0;
  width: 100%;
  background-color: antiquewhite;

  &__headline {
    width: 100%;
    text-align: center;
    margin-bottom: 5rem;
    font-family: $c-regular;
    color: #f9b600;
  }
  &__pictures {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    overflow-x: hidden;
    padding: 2rem 0rem;
    :nth-child(2n) {
      transform: rotateZ(6deg);
    }
  }
  &__picture {
    min-width: 200px;
    height: 200px;
    box-shadow: 1px 1px 1px #f9b600;
    transform: rotateZ(-3deg);
    border-radius: 2rem;
    flex-shrink: 0;
    object-fit: cover;
    object-position: center center;
    @media screen and (min-width: 1200px) {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
