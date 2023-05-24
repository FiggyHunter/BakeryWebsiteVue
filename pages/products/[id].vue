<template>
  <div class="limiter">
    <main class="product-content">
      <nuxt-link class="product-content__link" @click="router.go(-1)"
        ><button>Go Back</button>
      </nuxt-link>
      <nuxt-img
        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        class="product-content__image"
        loading="lazy"
      ></nuxt-img>
      <section class="product-content__description">
        <h1 class="product-content__description__headline"
          >{{ displayedProduct.productName }} {{ displayedProduct.mass }}g</h1
        >
        <div class="line"></div>
        <article class="product-content__additional-description">
          <h4>
            Kategorija: <span class="category">{{ displayedProduct.category }}</span></h4
          >
          <h4>
            Mass: <span class="category">{{ displayedProduct.mass }}g</span></h4
          >
          <h4>
            Energy in 100g: <span class="category">{{ displayedProduct.foodEnergy }}KJ</span></h4
          >
          <h4>
            Energy content (100g):
            <span class="category">{{ displayedProduct.calories }}KCAL</span></h4
          >
        </article>
        <div class="line"></div>
        <button v-if="showButton">Add to cart </button>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { getProductById } from '../../api/getProductById';
definePageMeta({
  layout: 'about',
});
const base = useRuntimeConfig().public.productsImagesBase;
const fetchedProduct = ref();
const displayedProduct = computed(() => {
  return new Object(fetchedProduct.value);
});

const showButton = ref(false);
const route = useRoute();
const router = useRouter();
onBeforeMount(async () => {
  fetchedProduct.value = await getProductById(Number(route.params.id));
});

if (route.query.past === 'shop') showButton.value = true;
watch(displayedProduct, () => {
  document.querySelector('.product-content__image').src =
    `${base}${displayedProduct.value.imageURL}` || `.`;
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.limiter {
  width: 80%;
  margin: 0 auto;
}
.product-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content fit-content fit-content;
  grid-template-areas:
    'button button'
    'image image'
    'description description';
  justify-items: center;
  gap: 2rem;
  margin-top: 6rem;
  margin-bottom: 10rem;

  @media screen and (min-width: 800px) {
    margin-top: 8rem;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: fit-content fit-content;
    grid-template-areas:
      'button button'
      'image description';
    gap: 3rem;
  }

  &__link {
    top: 150px;
    position: sticky;
    text-decoration: none;
    color: #f9b600;
    font-family: $c-bold;
    transition: transform 0.5s;
    background: white;
    &:hover {
      transform: scale(0.9);
    }
    grid-area: button;
    @media screen and (min-width: 800px) {
      justify-self: start;
    }
    border: 2px solid #002b50;
    button {
      text-transform: uppercase;
      padding: 0.5rem;
    }
  }

  &__description {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 100px;
    text-transform: uppercase;
    font-family: $c-bold;
    grid-area: description;
    &__headline {
      margin: 0;
      line-height: 2rem;
    }
  }
  &__image {
    width: 700px;
    grid-area: image;
  }
  &__additional-description {
    font-family: $c-medium;

    h4 {
      font-size: 1rem;
      color: #f9b600;
    }
    .category {
      font-family: $c-regular;
      color: #002b50;
    }
  }
}
.line {
  height: 2px;
  width: 30%;
  background-color: #f9b600;
  justify-self: center;
}
</style>
