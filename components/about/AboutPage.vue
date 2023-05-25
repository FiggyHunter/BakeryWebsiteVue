<template>
  <header class="header">
    <SharedMainNavInfo route-name="About" page-name="Our bakery" />
  </header>
  <main class="about">
    <section class="about__info">
      <p class="pgr__container about__info__pgr">
        At our bakery, we're passionate about crafting delicious baked goods that bring people
        together. Our journey began over 50 years ago, when our founder started baking bread in his
        home kitchen and selling it to friends and neighbors. Since then, we've grown into a
        thriving community bakery, serving up everything from crusty artisanal breads to decadent
        pastries and cakes.
      </p>
      <p class="pgr__container about__info-2__pgr">
        What sets us apart is our commitment to using only the highest-quality ingredients, sourced
        locally whenever possible. We believe that great ingredients make great food, which is why
        we work directly with local farmers and suppliers to bring you the freshest, most flavorful
        baked goods possible. Whether you're looking for a quick morning pastry or a custom-made
        cake for your special event, we've got you covered. Come visit us today and taste the
        difference that quality and passion make!
      </p>
    </section>

    <section class="about__graphics">
      <AboutPageGraphic
        :number-from="1"
        :number-to="100"
        number-description="million"
        description="euros of profit"
        :icons-array="[`https://mlinar.hr/icons/svg/success.svg`]"
        image-width="50px"
      />
      <AboutPageGraphic
        :number-from="1"
        :number-to="437"
        number-description="tonnes"
        description="products"
        :icons-array="[`https://mlinar.hr/icons/svg/bakery-products.svg`]"
        image-width="200px"
      />
      <AboutPageGraphic
        :number-from="1"
        :number-to="11"
        number-description="nations"
        description="supplied with deliciousness"
        :icons-array="[`https://mlinar.hr/icons/svg/planet-earth.svg`]"
        image-width="60px"
      />
    </section>

    <section class="world">
      <img src="../../assets/images/world.svg" alt="world image" srcset="" />
      <h3 class="world__headline">On all continents!</h3>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.pgr__container {
  height: fit-content;
}

.header {
  width: 80%;
  margin: 0 auto;
}

.about {
  font-family: $c-regular;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 5rem;
  display: grid;
  grid-template-rows: fit-content 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'info'
    'graphics';

  &__info {
    grid-area: info;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    grid-template-columns: 1fr;
    align-items: start;
    p {
      width: 100%;
      font-size: clamp(0.7rem, 0.5rem + 2vw, 1.5rem);
      margin-bottom: 0px;
    }
  }
  &__graphics {
    display: grid;
    text-align: center;
    gap: 2rem;
    grid-area: graphics;
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 5rem;
    @media screen and (min-width: 1000px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

.world {
  display: grid;
  justify-content: center;
  margin: 10rem 0rem 5rem 0rem;
  transform: scale(1.2);
  &__headline {
    font-size: clamp(2rem, 1rem + 4vw, 3rem);
    text-align: center;
    text-transform: uppercase;
    font-family: $c-bold;
    margin-top: 3rem;
    color: #f9b600;
  }
}
</style>
