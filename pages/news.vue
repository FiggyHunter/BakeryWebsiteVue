<template>
  <SharedMainNavInfo class="info" route-name="News" page-name="News" page-route="/news" />
  <div class="text">
    <NewsComponent
      headline="We won the competition!"
      content="Breaking news! Our bakery has just won first place in the annual citywide baking competition for our famous chocolate cake. Our head baker, Jane, spent months perfecting the recipe, and it has paid off. The judges raved about the cake's rich, moist texture and perfectly balanced chocolate flavor. We are thrilled to be recognized for our hard work and dedication to quality baking. To celebrate our victory, we're offering a special discount on our award-winning chocolate cake for a limited time. Come and taste the best chocolate cake in town!"
      :imageUrl="`${base}/bakerscompetition.webp`"
    />
    <NewsComponent
      headline="New Exclusive Coffee Drinks In Our Bakery!"
      content="Exciting announcement! Our bakery has just partnered with a local coffee roaster to offer a new line of specialty coffee drinks. From lattes to cappuccinos, we're now using freshly roasted beans to create the perfect cup of coffee to pair with our baked goods. Our customers can now enjoy the aroma of freshly brewed coffee while indulging in our signature treats. We're committed to providing the best quality ingredients in all of our products, and this partnership is just one more step in that direction. Come and try our new coffee menu today!"
      :imageUrl="`${base}/coffee.webp`"
    />
    <NewsComponent
      headline="Bread like no other!"
      content="Fresh from the oven! Our bakery is
    excited to announce a new line of artisanal bread that uses locally sourced and organic
    ingredients. Our bakers have been experimenting with different types of flours, grains, and
    seeds to create unique and flavorful bread that's not available anywhere else. From whole wheat
    to rye and sourdough, our bread is made with traditional techniques and baked in a stone oven
    for that perfect crust and aroma. We believe that good bread should be accessible to everyone,
    and that's why we're offering our new bread at affordable prices. Come and try our fresh bread
    and taste the difference in every slice. You can also pre-order for pick up or delivery, so you
    can enjoy fresh bread anytime, anywhere!"
      :imageUrl="`${base}/bread.webp`"
    />
  </div>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().imagesBase;

definePageMeta({
  layout: 'news',
});
useHead({
  title: `News | Our Bakery`,
  meta: [
    {
      name: 'description',
      content: `Stay up-to-date with the latest happenings and mouthwatering creations at [Bakery Name]. Explore our news page to unveil a world of culinary inspiration, from tantalizing new recipes to exciting seasonal specials. Immerse yourself in our bakery's journey as we share behind-the-scenes stories, baking tips, and captivating tales of flavor exploration.`,
    },
  ],
});
</script>

<style lang="scss" scoped>
.text {
  width: 80%;
  margin: 6rem auto;
}
.info {
  margin-top: 10rem;
  @media screen and (min-width: 1000px) {
    padding-left: 10vw;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 14vw;
  }
}
</style>
