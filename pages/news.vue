<template>
  <div class="text">
    <SharedMainNavInfo page-name="News" page-route="/news" />
    <NewsComponent
      headline="Ne propustite novu dvotjednu akciju!"
      content="Donosimo vam neodoljive proizvode po odličnim cijenama tijekom razdoblja od 1.5. do 14.5. Ne propustite ovu sjajnu priliku i posjetite nas kako biste se počastili sljedećim proizvodima: Kukuruzna kiflica 30g po cijeni od samo 0.20 eura - savršen mali snack za svaku prigodu. Extreme choco muffin i Red velvet muffin 110g po cijeni od samo 1.25 eura - savršeno za sve koji žele uživati u ukusnom desertu. Kruh s bučinim sjemenkama 500g po cijeni od 1.60 eura - ukusan i hranjiv izbor za sve koji traže zdraviju opciju kruha. Pizza calzone 220g + Coca Cola 0.5L po cijeni od samo 2 eura – dobitna kombinacija za brzinski ručak uz omiljeni napitak. Šunka sir košarica 105g po cijeni od samo 1 eura – savršen izbor za užinu."
    />
    <NewsComponent
      headline="Ne propustite novu dvotjednu akciju!"
      content="Donosimo vam neodoljive proizvode po odličnim cijenama tijekom razdoblja od 1.5. do 14.5. Ne propustite ovu sjajnu priliku i posjetite nas kako biste se počastili sljedećim proizvodima: Kukuruzna kiflica 30g po cijeni od samo 0.20 eura - savršen mali snack za svaku prigodu. Extreme choco muffin i Red velvet muffin 110g po cijeni od samo 1.25 eura - savršeno za sve koji žele uživati u ukusnom desertu. Kruh s bučinim sjemenkama 500g po cijeni od 1.60 eura - ukusan i hranjiv izbor za sve koji traže zdraviju opciju kruha. Pizza calzone 220g + Coca Cola 0.5L po cijeni od samo 2 eura – dobitna kombinacija za brzinski ručak uz omiljeni napitak. Šunka sir košarica 105g po cijeni od samo 1 eura – savršen izbor za užinu."
    />
    <NewsComponent
      headline="Ne propustite novu dvotjednu akciju!"
      content="Donosimo vam neodoljive proizvode po odličnim cijenama tijekom razdoblja od 1.5. do 14.5. Ne propustite ovu sjajnu priliku i posjetite nas kako biste se počastili sljedećim proizvodima: Kukuruzna kiflica 30g po cijeni od samo 0.20 eura - savršen mali snack za svaku prigodu. Extreme choco muffin i Red velvet muffin 110g po cijeni od samo 1.25 eura - savršeno za sve koji žele uživati u ukusnom desertu. Kruh s bučinim sjemenkama 500g po cijeni od 1.60 eura - ukusan i hranjiv izbor za sve koji traže zdraviju opciju kruha. Pizza calzone 220g + Coca Cola 0.5L po cijeni od samo 2 eura – dobitna kombinacija za brzinski ručak uz omiljeni napitak. Šunka sir košarica 105g po cijeni od samo 1 eura – savršen izbor za užinu."
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'news',
});
</script>

<style lang="scss" scoped>
.text {
  margin-top: 7rem;
  width: 80%;
  margin: 6rem auto;
  @media screen and (min-width: 700px) {
    margin-top: 10rem;
  }
}
</style>
