<template>
  <div class="graphic-container">
    <h2 class="graphic-container__headline">
      <ClientOnly>
        <number
          ref="number"
          :from="numberFrom"
          :to="numberTo"
          :duration="6"
          :delay="0.5"
          easing="Power1.easeOut"
        />

        <span class="graphic-container__sub"> {{ numberDescription }}</span>
      </ClientOnly>
    </h2>
    <div class="graphic-container__bottom">
      <p class="graphic-container__bottom__pgr">{{ description }}</p>
      <div class="graphic-container__bottom__images">
        <img
          class="graphic-container__bottom__image"
          v-for="icon in iconsArray"
          :key="icon"
          :src="icon"
          alt="icon image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  numberFrom: Number,
  numberTo: Number,
  numberDescription: String,
  description: String,
  iconsArray: Array<string>,
  imageWidth: String,
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.graphic-container {
  font-family: $c-regular;
  &__sub {
    margin-left: 1rem;
  }

  &__headline {
    color: #73aed7;
    font-family: $c-bold;
    font-size: clamp(2rem, 1rem + 5vw, 3.5rem);
  }

  &__bottom {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    @media screen and (min-width: 1000px) {
      justify-content: center;
    }
    gap: 1rem;
    &__images {
      width: fit-content;
      flex-shrink: 0;
    }

    &__pgr {
      width: 100%;
      margin-bottom: 0;
      font-size: 1.5rem;
      color: #002559;
    }

    &__image {
      width: v-bind('$props.imageWidth');
    }

    &__images {
      display: flex;
    }
  }
}
</style>
