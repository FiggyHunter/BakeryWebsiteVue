<template>
  <div class="limiter">
    <SharedMainNavInfo class="info" page-name="Our Webshop" route-name="Webshop" />
    <KeepAlive>
      <main class="products">
        <section class="products__displayed-products">
          <WebshopProductsCard
            v-for="product in displayedProducts"
            :key="product.id"
            class="products__displayed-product"
            :img="product.imageURL"
            :name="product.productName"
            :id="product.id"
            :sub="product.subCategory"
            :price="product.price"
          />
        </section>
      </main>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { useUserStore } from '~/stores/user';

const productsStore = useProductsStore();
const userStore = useUserStore();

const fetchedProducts = ref({});
const selectedCategory = ref('');

onBeforeMount(async () => {
  await productsStore.FETCH_WEBSHOP_PRODUCTS();
  fetchedProducts.value = productsStore.GET_ALL_PRODUCTS;
});

const displayedProducts = computed(() => {
  return selectedCategory.value === ''
    ? fetchedProducts.value
    : fetchedProducts.value[selectedCategory.value];
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.info {
  margin-top: 30vw;
  @media screen and (min-width: 700px) {
    margin-top: 15vw;
    margin-left: 2%;
  }

  @media screen and (min-width: 1300px) {
    margin-top: 10vw;
    margin-left: 2%;
  }
}
.limiter {
  width: 95%;
  @media screen and (min-width: 900px) {
    width: 85%;
  }
  margin: 0 auto;
}

.products {
  font-family: $c-regular;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr;
  }
  width: 100%;
  margin: 2rem 0rem;
  margin-bottom: 10rem;
  height: fit-content;
  position: relative;
  &__filters {
    position: sticky;
    top: clamp(80px, 100px + 4vw, 200px);
    button {
      position: sticky;
      text-transform: uppercase;
      font-family: $c-medium;
      width: fit-content;
      justify-self: center;
      font-size: 1.3rem;
    }
    display: grid;
    grid-template-columns: 1fr;
    height: fit-content;
    gap: 2rem;
  }
  &__displayed-products {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(auto-fit, 300px);
    }
    @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(auto-fit, 350px);
    }
    justify-content: center;
    gap: 2rem;
  }
}

.bold {
  font-weight: 900;
}
</style>
