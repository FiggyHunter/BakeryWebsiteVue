<template>
  <SharedMainNavInfo class="mainnavinfo" page-name="Our Bakery's History" route-name="History" />
  <main class="history">
    <section class="history__years">
      <div
        v-for="year in allYears"
        :key="year"
        :class="[`history__year`, { textbold: year === displayedYear.year }]"
        @click="updateDisplayedYear(year)"
      >
        {{ year }}
      </div>
      <div class="history__line"></div>
    </section>
    <transition name="fade" mode="out-in">
      <div class="history__content" v-if="displayedYear" :key="displayedYear.year">
        <div class="history__image-ctr">
          <img class="history__image" :src="displayedYear.src" alt="historic image" />
        </div>
        <div class="history__text">
          <h2 class="history__headline">{{ displayedYear.year }}</h2>
          <p class="history__pgr">{{ displayedYear.description }}</p>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup lang="ts">
const allYears = ['1903', '1950', '1988', '1990', '2011', '2019', '2020'];

const yearsDescriptionsPairs = [
  {
    year: '1903',
    description:
      "Our bakery was founded in 1903 by a passionate baker named Thomas, who started baking bread and pastries in his small kitchen. In those days, the bakery was known for its signature sourdough bread, which Thomas perfected through years of trial and error. As the years went by, the bakery grew in popularity, and Thomas expanded his offerings to include cakes, cookies, and pies. By the 1920s, the bakery had become a local institution, and generations of families have enjoyed our baked goods ever since. Today, we continue to honor Thomas's legacy by using his original recipes and techniques to create our artisanal baked goods. Come visit us and taste the history in every bite!",

    src: 'https://wallpapercave.com/wp/wp2174331.jpg',
  },
  {
    year: '1950',
    description:
      'In 1950, our bakery opened its doors to the community, serving fresh, delicious baked goods made with love and care. Our founder, Mary, had a passion for baking since childhood and honed her skills through years of practice and hard work. She passed down her recipes and techniques to her daughter, who continues the family legacy today. In 1950, we introduced our famous chocolate cake, which quickly became a customer favorite. We also started using a wood-fired oven to give our bread a unique, rustic flavor that our customers still love to this day. ',
    src: 'https://i.pinimg.com/originals/63/86/fb/6386fb5f4904ea325fa16ebf9f53aa30.jpg',
  },
  {
    year: '1988',
    description:
      'In 1988, our bakery continued to thrive, serving our loyal customers with the same dedication and passion as always. That year, we introduced a new recipe for our famous cinnamon buns, which quickly became a customer favorite. We also started using a new oven that allowed us to bake our breads to perfection, with a crispy crust and soft, fluffy interior. Our founder, Sarah, was proud to see how her small bakery had grown over the years, and how it had become a staple in the community. Today, we continue to use the same traditional methods and high-quality ingredients that have made us a success for over three decades. ',
    src: 'https://i.pinimg.com/originals/ff/14/e0/ff14e06f63bc25bd2d05dae495ee020e.jpg',
  },
  {
    year: '1990',
    description: `In 1990, our bakery celebrated its 40th anniversary, a milestone that we were proud to reach. We commemorated the occasion by introducing a new cake recipe, a rich chocolate fudge cake that quickly became a customer favorite. That year, we also started using a new technique to make our croissants even flakier and more delicious. Our founder's son, David, had taken over the business by then and continued the family tradition of using only the finest ingredients and time-honored techniques to create our delicious baked goods. Today, we continue to innovate and experiment with new recipes and techniques while staying true to our roots. Come visit us and taste the history and tradition in every bite!`,
    src: 'https://i.pinimg.com/originals/7e/2f/a4/7e2fa4522be899abdb5fcb6b992ded4b.jpg',
  },
  {
    year: '2011',
    description: `In 2011, our bakery expanded its offerings to include gluten-free and vegan options, in response to the growing demand for alternative diets. We introduced a line of gluten-free breads, muffins, and cakes, all made with the same care and attention to detail as our traditional products. That year, we also started sourcing our ingredients from local farmers and suppliers, as part of our commitment to sustainability and supporting our community. Our founder's granddaughter, Emily, had joined the business by then and was instrumental in implementing these changes. Today, we continue to offer a wide range of delicious baked goods for all dietary needs and preferences, and we remain committed to using only the freshest and most sustainable ingredients.`,
    src: 'https://static01.nyt.com/images/2011/05/08/travel/08headsup-span/08headsup-span-articleLarge.jpg',
  },
  {
    year: '2019',
    description: `In 2019, our bakery celebrated its 70th anniversary, a testament to our dedication and passion for baking. We marked the occasion by creating a new line of artisanal breads, made with locally-sourced organic grains and slow-fermented for maximum flavor. We also introduced a new loyalty program for our customers, offering special discounts and promotions throughout the year. That year, we also renovated our bakery, updating our equipment and expanding our seating area to accommodate more customers. Our founder's great-grandson, Jack, had taken over the business by then and continued the family tradition of excellence and innovation. Today, we are still committed to creating the highest quality baked goods and providing exceptional service to our customers, as we have for the past 70 years.`,
    src: 'https://t3.ftcdn.net/jpg/03/74/30/58/360_F_374305868_x6hIX4Qcl7SYxhOj5b5KCU8hq9bN9vhx.jpg',
  },
  {
    year: `2020`,
    description:
      'In 2020, our bakery faced unprecedented challenges due to the global pandemic. We quickly adapted to the new reality by implementing strict safety measures and transitioning to online ordering and delivery. Despite the challenges, we remained committed to serving our community and continued to provide our customers with the same high-quality baked goods they had come to know and love. We also launched a new initiative to support frontline workers, donating a portion of our profits to local hospitals and first responders. That year, we also introduced a new line of homemade jams and spreads, made with locally-sourced fruits and organic ingredients. Today, we continue to evolve and innovate, always putting the needs and safety of our customers first.',
    src: 'https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2021/11/03/aba-outlays-covid-hangover-challenges-impacting-the-us-bakery-sector/12982910-1-eng-GB/ABA-outlays-COVID-hangover-challenges-impacting-the-US-bakery-sector.jpg',
  },
];

const displayedYear = ref(yearsDescriptionsPairs[0]);
const updateDisplayedYear = (year) => {
  const item = yearsDescriptionsPairs.find((item) => item.year === year);
  displayedYear.value = item;
};

const updateYearAndContent = (e) => {
  if (e.deltaY > 0) {
    increaseYear();
  } else {
    decreaseYear();
  }
};

const increaseYear = () => {
  let { _, next } = findNextAndPreviousYear(displayedYear.value.year);
  if (!next.year) return;
  displayedYear.value = next;
};

const decreaseYear = () => {
  let { previous, _ } = findNextAndPreviousYear(displayedYear.value.year);
  if (!previous.year) return;
  displayedYear.value = previous;
};

const findNextAndPreviousYear = (year: string) => {
  let next, previous;

  next = yearsDescriptionsPairs[yearsDescriptionsPairs.findIndex((obj) => obj.year === year) + 1];
  previous =
    yearsDescriptionsPairs[yearsDescriptionsPairs.findIndex((obj) => obj.year === year) - 1];

  return { previous, next };
};

onMounted(() => {
  if (window.innerWidth > 700) {
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.addEventListener('wheel', updateYearAndContent);
  }
});

onBeforeUnmount(() => {
  document.body.style.height = 'unset';
  document.body.style.overflow = 'unset';
  document.removeEventListener('wheel', updateYearAndContent);
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.mainnavinfo {
  width: 70%;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: -6rem;
  h3 {
    font-size: 1rem !important;
  }
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
}

#__nuxt {
  height: 100vh;
  overflow: hidden;
}
.history {
  position: relative;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 4fr;
  width: 95%;
  margin: clamp(6rem, 3rem + 10vw, 13rem) auto;
  padding-bottom: 15rem;
  @media screen and (min-width: 1000px) {
    width: 70%;
  }
  &__years {
    display: grid;
    gap: 2rem;
  }

  &__year {
    z-index: 5;
    font-family: $c-regular;
    font-size: clamp(1.3rem, 1rem + 4vw, 2.2rem);
    &:hover {
      cursor: pointer;
      font-family: $c-bold;
    }
    color: #002559;
  }

  &__line {
    height: 100%;
    width: 0.75px;
    background-color: rgba(0, 0, 0, 0.298);
    position: absolute;
    left: 2.2rem;
    z-index: 3;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
  }

  &__image-ctr {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.9844474899334734) 0%,
        rgba(255, 255, 255, 0.6259040725665266) 49%,
        rgba(255, 255, 255, 0.2113382462359944) 100%
      );
    }
    position: absolute;
    z-index: -1;
    width: 50%;
    right: 1rem;
    top: -1rem;
    @media screen and (min-width: 1000px) {
      right: -10%;
    }
    img {
      z-index: -2;
    }
  }
  &__headline {
    font-size: clamp(2rem, 1.5rem + 7vw, 8rem);
    color: #002559;
    font-family: $c-regular;
  }
  &__pgr {
    font-family: $c-regular;
    width: 70%;
    @media screen and (min-width: 1000px) {
      width: 80%;
    }
    @media screen and (min-width: 1400px) {
      width: 90%;
    }
    font-size: clamp(0.6rem, 0.5rem + 1vw, 1.5rem);
    margin-top: 4rem;
    color: #002559;
  }
}

.textbold {
  font-family: $c-bold;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.3s;
}

.fade-leave-active {
  animation: fade-out 0.3s;
}
</style>
