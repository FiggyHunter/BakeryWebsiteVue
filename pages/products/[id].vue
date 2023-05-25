<template>
  <div class="id-content">
    <div class="limiter">
      <main class="product-content">
        <nuxt-link class="product-content__link" @click="router.go(-1)"
          ><button>Go Back</button>
        </nuxt-link>
        <nuxt-img
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          class="product-content__image"
          loading="lazy"
          alt="product image"
          width="900px"
          height="900px"
        ></nuxt-img>
        <section class="product-content__description">
          <h1 class="product-content__description__headline"
            >{{ displayedProduct.productName }} {{ displayedProduct.mass }}g</h1
          >
          <div class="line"></div>
          <article class="product-content__additional-description">
            <h4>
              Category: <span class="category">{{ displayedProduct.category }}</span></h4
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
          <div v-if="showButton" class="buy-dialog">
            <h4 class="price"> PRICE: {{ displayedProduct.price }} $</h4>
            <button @click="addProductInCart(displayedProduct)">Add to cart </button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProductById } from '../../api/getProductById';
import { useUserStore } from '../../stores/user';
definePageMeta({
  layout: 'product-id',
});

useHead({ title: `Loading Product | Our Bakery` });

const base = useRuntimeConfig().public.productsImagesBase;
const fetchedProduct = ref();
const displayedProduct = computed(() => {
  return new Object(fetchedProduct.value);
});

const userStore = useUserStore();

const showButton = ref(false);
const route = useRoute();
const router = useRouter();
onBeforeMount(async () => {
  fetchedProduct.value = await getProductById(Number(route.params.id));
});

const addProductInCart = function (product) {
  userStore.ADD_PRODUCT_IN_CART(product);
};
if (route.query.past === 'shop') showButton.value = true;
watch(displayedProduct, () => {
  document.querySelector('.product-content__image').src =
    `${base}${displayedProduct.value.imageURL}` || `.`;
  if (displayedProduct.value.price) showButton.value = true;

  useHead({ title: `${displayedProduct.value.productName} | Our Bakery` });
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.id-content {
  background-color: #002559;
}
.limiter {
  width: 80%;
  margin: 0 auto;
}
.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: fit-content fit-content fit-content;
  grid-template-areas:
    'button button'
    'image image'
    'description description';
  justify-items: center;
  gap: 4rem;
  padding-top: 6rem;
  padding-bottom: 10rem;

  @media screen and (min-width: 800px) {
    padding-top: 8rem;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: fit-content fit-content;
    grid-template-areas:
      'button button'
      'image description';
    gap: 3rem;
  }

  &__link {
    top: clamp(4.4rem, 3rem + 7vw, 10rem);
    margin-left: 0.4rem;
    position: sticky;
    text-decoration: none;
    color: #002559;
    font-family: $c-bold;
    transition: transform 0.5s;
    background-color: #f9b600;
    -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
    animation: pulsate-fwd 0.5s ease-in-out infinite both;
    &:hover {
      animation: pause;
    }
    grid-area: button;
    @media screen and (min-width: 800px) {
      justify-self: start;
    }
    border: 2px solid #002500;
    button {
      text-transform: uppercase;
      padding: 0.5rem;
    }
  }

  &__description {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 50px;
    text-transform: uppercase;
    gap: 1rem;
    font-family: $c-bold;
    grid-area: description;
    &__headline {
      margin: 0;
      color: white;
      line-height: 2rem;
      text-align: center;
    }
  }
  &__image {
    width: 700px;
    height: 100%;
    object-fit: fill;
    object-position: 50% 50%;
    grid-area: image;
    border: 5px solid #f9b600;
    border-radius: 1rem;
  }
  &__additional-description {
    font-family: $c-medium;
    text-align: center;
    h4 {
      font-size: 1rem;
      color: #f9b600;
    }
    .category {
      font-family: $c-regular;
      color: white;
    }
  }

  .buy-dialog {
    display: grid;
    grid-template-rows: auto auto;
    gap: 1rem;
    button {
      width: 60%;
      padding: 0.5rem 1rem;
      justify-self: center;
      background-color: #002559;
      color: #f9b600;
      font-family: $c-bold;
      transition: 0.5s transform;
      border: 2px solid white;
      border-radius: 2rem;
      text-transform: uppercase;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
  .price {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    text-align: center;
    font-family: $c-bold;
    color: white;
  }
}
.line {
  height: 2px;
  width: 30%;
  background-color: #f9b600;
  justify-self: center;
}

@-webkit-keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
