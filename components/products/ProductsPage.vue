<template>
  <div class="limiter">
    <SharedMainNavInfo class="info" page-name="Our Products" route-name="Products" />
    <KeepAlive>
      <main class="products">
        <aside class="products__filters"
          ><button
            :class="[`products__filters__button`, { bold: category === selectedCategory }]"
            @click="updateCategory(category)"
            v-for="category in categories"
            :key="category"
          >
            {{ category }}</button
          ></aside
        >
        <section class="products__displayed-products">
          <ProductsCard
            v-for="product in displayedProducts"
            :key="product.id"
            class="products__displayed-product"
            :img="product.imageURL"
            :name="product.productName"
            :id="product.id"
            :sub="product.subCategory"
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

const categories = ref();
const fetchedProducts = ref();
const selectedCategory = ref('');

const updateCategory = (category: string) => {
  userStore.ADD_SELECTED_CATEGORY(category);
  selectedCategory.value = userStore.GET_SELECTED_CATEGORY;
  const helperNav = document.querySelector('.info');
  helperNav.scrollIntoView({ behavior: 'smooth' });
};

onBeforeMount(async () => {
  await productsStore.FETCH_PRODUCTS();
  fetchedProducts.value = productsStore.GET_ALL_PRODUCTS;
  categories.value = productsStore.GET_PRODUCTS_CATEGORIES;
  userStore.GET_SELECTED_CATEGORY
    ? (selectedCategory.value = userStore.GET_SELECTED_CATEGORY)
    : (selectedCategory.value = 'breads');
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
    margin-top: 10vw;
    margin-left: 6%;
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
  grid-template-columns: 2fr 5fr;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 5fr;
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
    grid-template-columns: repeat(auto-fit, 250px);
    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(auto-fit, 275px);
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
