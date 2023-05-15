<template>
  <div class="separator"></div>
  <section class="webshop">
    <q-carousel
      class="webshop__carousel"
      v-model="slide"
      animated
      arrows
      navigation
      infinite
      swipeable
    >
      <q-carousel-slide
        :name="1"
        img-src="https://images.unsplash.com/photo-1621955511667-e2c316e4575d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://images.unsplash.com/photo-1558303420-f814d8a590f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://images.unsplash.com/photo-1479894127662-a987d1e38f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
    </q-carousel>
    <article class="webshop__information">
      <div>
        <h5 class="webshop__information__sub-headline">FRESH FROM OUR BAKERY</h5>
        <h2 class="webshop__information__main-headline"><span class="blue">NEW </span> WEBSHOP</h2>
      </div>
      <hr />
      <p class="webshop__information__pgr">
        From our oven, we bring our new web shop. Our webshop is now easier to access, faster and
        smooth as butter. Order tasty and crusty bits from our product catalog and enjoy the taste.
        Whether it's sweet or salty, our products are here to help you tell a wonderful story. Order
        online and collect in one of our stores. Your order will be waiting for you!
      </p>
      <nuxt-link class="button__link" to="/about">
        <q-btn
          class="webshop__information__button"
          :ripple="{ center: true, color: 'white' }"
          label="order now"
          flat
          push
          :no-wrap="true"
        />
      </nuxt-link>
    </article>
  </section>
</template>

<script setup lang="ts">
const slide = ref(1);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    slide.value === 4 ? (slide.value = 1) : (slide.value += 1);
  }, 4000);
  watch(slide, () => {
    clearInterval(interval);
    interval = setInterval(() => {
      slide.value === 4 ? (slide.value = 1) : (slide.value += 1);
    }, 4000);
  });
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.separator {
  border: 1px solid #f9b600;
  width: 70%;
  position: absolute;
  left: 15%;
}
.webshop {
  hr {
    position: initial;
    margin: initial;
    border-color: #002559;
    width: 30%;
  }
  &__carousel {
    order: 1;
  }
  font-family: $c-regular;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1200px) {
    padding: 5% 15% 15% 15%;
    grid-template-columns: 1fr 1fr;
  }
  gap: 3rem;
  padding: 5% 10% 15% 10%;
  background-color: antiquewhite;
  &__information {
    order: 0;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    &__button {
      background-color: #f9b600;
      border-radius: 2rem;
      width: 60%;
      margin: 0 auto;
      text-transform: uppercase;
      color: white;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      letter-spacing: 0.2rem;
      box-shadow: 1.2px 1.2px 1.2px 0.7px rgba(0, 0, 0, 0.137);
      font-size: clamp(0.7rem, 1rem + 2vw, 1.1rem);
      transition: transform 0.3s;
      &:hover {
        transform: scale(0.95);
      }
    }
    &__sub-headline {
      color: #002559;
      font-family: $c-bold;
    }
    &__main-headline {
      color: #f9b600;
    }

    &__pgr {
      color: #002559;
      font-size: clamp(0.7rem, 1rem + 2vw, 1.05rem);
    }
    .blue {
      color: #002559;
    }
  }
}
.webshop__carousel {
  box-shadow: 2px 2px 2px 2px rgba(218, 165, 32, 0.389);
  border-radius: 2rem;
}

.button__link {
  text-decoration: none;
}
</style>
