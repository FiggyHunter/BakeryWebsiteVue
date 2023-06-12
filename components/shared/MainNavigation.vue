<template>
  <header>
    <nav :class="[`main-navigation`, { blue: backgroundBlue }, `text-red`]">
      <div class="main-navigation__container">
        <nuxt-link to="/"
          ><img :class="[`main-navigation__logo`]" src="@/assets/images/logo.svg" alt="logo image"
        /></nuxt-link>
        <ul class="main-navigation__items-container">
          <li v-for="item in menuItems" :key="item.text">
            <nuxt-link exact-active-class="active" :to="item.path.toLowerCase()">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>

        <div class="main-navigation-mobile-icons">
          <nuxt-link to="/locations">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              :stroke="colortext"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </nuxt-link>
          <nuxt-link to="/cart">
            <v-badge :text-color="colortext" color="#F9B600" class="cart-badge" :content="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="colortext"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </v-badge>
          </nuxt-link>
          <svg
            aria-hidden="true"
            class="hamburger"
            :fill="colortext"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  textcolor: String,
});

const colortext = ref(props.textcolor);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const pageLocationY = ref();

const mobileNavShown = ref(false);
const handleScroll = () => {
  const history = document.querySelector('.history')?.getBoundingClientRect() || null;
  const instagram = document.querySelector('.instagram')?.getBoundingClientRect() || null;
  const arrow = document.querySelector('.up');
  const footer = document.querySelector('.main-footer')?.getBoundingClientRect() || null;
  const image = document.querySelector('.image')?.getBoundingClientRect() || null;
  pageLocationY.value = window.scrollY;
  const textColor = props.textcolor;
  pageLocationY.value > 30 ? (colortext.value = 'white') : (colortext.value = textColor);
  if (mobileNavShown.value) {
    colortext.value = 'white';
  }

  if (history && instagram && footer && arrow) {
    const arrowOffsetTop = arrow.offsetTop + 35;
    if (isItIntersecting(arrowOffsetTop, image.top, image.bottom)) {
      arrow.style.backgroundColor = '#F9B600';
      arrowColor.value = 'black';
      return;
    }
    if (isItIntersecting(arrowOffsetTop, history.top, history.bottom)) {
      arrow.style.backgroundColor = '#F9B600';
      arrowColor.value = 'black';
      return;
    }

    if (isItIntersecting(arrowOffsetTop, footer.top, footer.bottom)) {
      arrow.style.backgroundColor = '#F9B600';
      arrowColor.value = 'black';
      return;
    }

    arrow.style.backgroundColor = '#002559';
    arrowColor.value = 'white';
  }
};

const isItIntersecting = (offset, top, bottom) => offset >= top && offset <= bottom;
watch(windowWidth, () => {
  if (windowWidth.value === 800) {
    mobileNavShown.value = false;
    handleScroll();
  }
});

const backgroundBlue = computed(() => {
  return pageLocationY.value > 30 ? true : false;
});

const handleScroll = () => {
  pageLocationY.value = window.scrollY;
  pageLocationY.value > 30 ? (colortext.value = 'white') : (colortext.value = props.textcolor);
};

const menuItems = [
  { text: 'PRODUCTS', path: '/products' },
  { text: 'WEBSHOP', path: '/webshop' },
  { text: 'NEWS', path: '/news' },
  { text: 'ABOUT US', path: '/about-us' },
  { text: 'HISTORY', path: '/history' },
  { text: 'CONTACT US', path: '/contact-us' },
];
</script>

<style scoped lang="scss">
@use '../assets/styles/abstracts/variables' as *;

.active {
  color: #f9b600 !important;
}

.blue {
  background-color: #002559;
}
.main-navigation {
  position: fixed;
  padding-top: 10px;
  top: 0;
  width: 100%;
  z-index: 100;
  font-family: $c-regular;
  &__logo {
    padding-left: 0.7rem;
    width: clamp(60px, 8vw + 2rem, 120px);
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 50rem) {
      justify-content: space-around;
    }
  }
  &__items-container {
    display: none;
    list-style-type: none;
    a {
      text-decoration: none;
      color: v-bind(colortext);
      font-size: clamp(0.6rem, 1vw + 0.5rem, 1.2rem);
    }
    a:hover {
      font-weight: 900;
    }
    @media screen and (min-width: 50rem) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    @media screen and (min-width: 78.125rem) {
      gap: 4rem;
    }

    @media screen and (min-width: 96.875rem) {
      gap: 6rem;
    }
  }

  &-mobile-icons {
    display: flex;
    gap: 0.8rem;
    margin-right: 0.7rem;

    svg:hover {
      cursor: pointer;
    }
  }
  .hamburger {
    width: 25px;
    height: 25px;
    @media (min-width: 50rem) {
      display: none;
    }
  }
  transition: background-color 0.4s;
}
</style>
