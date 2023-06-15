<template>
  <header>
    <nav :class="[`main-navigation`, { blue: backgroundBlue }]">
      <div class="main-navigation__container">
        <nuxt-link to="/"
          ><img
            :class="[`main-navigation__logo`]"
            src="@/assets/images/logo.svg"
            alt="logo image"
            width="500px"
            height="500px"
        /></nuxt-link>
        <ul class="main-navigation__items-container">
          <li v-for="item in menuItems" :key="item.text">
            <nuxt-link exact-active-class="active" :to="item.path.toLowerCase()">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>

        <div class="main-navigation-mobile-icons">
          <nuxt-link aria-label="locations button" to="/locations">
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
            <v-badge
              :text-color="colortext"
              color="#F9B600"
              class="cart-badge"
              :content="cartItemsNumber"
            >
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
            @click="showMobileNav"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <nuxt-link class="order" v-if="displayOrder" to="/order">Go back to your order</nuxt-link>
    </nav>
  </header>
  <transition name="fade">
    <nav :class="[`mobile-nav`]" v-if="mobileNavShown">
      <ul class="mobile-nav__links"
        ><nuxt-link @click="showMobileNav" :to="item.path" v-for="item in menuItems" :key="item"
          ><li class="mobile-nav__link"> {{ item.text }}</li></nuxt-link
        >
      </ul>
    </nav>
  </transition>

  <transition name="appear">
    <div @click="goTop" v-if="backgroundBlue" class="up">
      <svg
        width="591.99805mm"
        height="1015.7354mm"
        viewBox="0 0 591.99805 1015.7354"
        version="1.1"
        class="arrow"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(2895.7877,443.12017)">
          <path
            class="path"
            style="stroke-width: 0.264583"
            d="m -2676.7884,206.31518 c 0,-201.464984 -0.089,-366.35027 -0.1984,-366.41173 -0.1092,-0.0615 -8.4138,0.88257 -18.4547,2.09785 -19.295,2.33532 -34.5965,4.1841 -54.3719,6.56937 -6.6212,0.79865 -23.8852,2.88227 -38.3646,4.63026 -14.4793,1.74802 -44.1259,5.31982 -65.8812,7.93737 -21.7554,2.61752 -40.0848,4.83304 -40.7321,4.92334 -1.1121,0.15518 -1.1557,0.13766 -0.7937,-0.31856 0.3492,-0.44011 17.1674,-18.04471 47.3572,-49.57162 6.3404,-6.6212 21.0415,-21.98026 32.6692,-34.13125 11.6276,-12.15099 35.6717,-37.27148 53.4312,-55.82329 17.7595,-18.55182 40.3268,-42.12648 50.1494,-52.38814 9.8227,-10.26165 39.0292,-40.77312 64.9035,-67.80326 25.8742,-27.03014 47.1504,-49.14571 47.2804,-49.14571 0.13,0 28.0136,29.02148 61.9635,64.49218 33.9499,35.4707 67.0311,70.02859 73.5138,76.79531 16.7188,17.45139 56.0558,58.54959 80.2788,83.87299 11.3446,11.8599 23.2009,24.24237 26.3474,27.51659 22.0985,22.99547 53.9848,56.42435 53.9008,56.50836 -0.1037,0.10371 -2.9255,-0.23225 -79.0465,-9.41134 -24.2292,-2.92166 -52.3875,-6.31568 -62.574,-7.54224 -10.1864,-1.22653 -27.4505,-3.30787 -38.3646,-4.62518 -10.914,-1.3173 -23.8323,-2.86927 -28.7072,-3.44884 -4.875,-0.57957 -9.191,-1.1103 -9.5912,-1.17941 l -0.7276,-0.12562 v 133.724642 c 0,88.86436 -0.089,133.779488 -0.2646,133.888158 -0.176,0.10882 -0.2646,77.96664 -0.2646,232.71664 v 232.55312 h -76.7291 -76.7292 z"
            id="path302"
          />
        </g>
      </svg>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/user';
const userStore = useUserStore();
const route = useRoute();
const displayOrder = computed(() => {
  return userStore.GET_ON_ORDER && route.fullPath !== '/order';
});

const cartItemsNumber = computed(() => userStore.GET_CART_LENGTH);

const emits = defineEmits(['hamburgerClicked']);

const props = defineProps({
  textcolor: String,
});

const arrowColor = ref('black');

const colortext = ref(props.textcolor);
const windowWidth = ref(0);

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

const goTop = () => {
  if (process.client)
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavShown.value) {
      showMobileNav();
    }
  });
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});

const menuItems = [
  { text: 'PRODUCTS', path: '/products' },
  { text: 'WEBSHOP', path: '/shop' },
  { text: 'NEWS', path: '/news' },
  { text: 'ABOUT US', path: '/about-us' },
  { text: 'HISTORY', path: '/history' },
  { text: 'CONTACT US', path: '/contact-us' },
];

const showMobileNav = () => {
  mobileNavShown.value = !mobileNavShown.value;
  if (mobileNavShown.value) {
    colortext.value = 'white';
  } else {
    handleScroll();
  }
};
</script>

<style scoped lang="scss">
@use '../assets/styles/abstracts/variables' as *;

.active {
  color: #f9b600 !important;
  font-weight: 900;
}
.blue {
  background-color: #002559;
}

.order {
  display: block;
  width: 100vw;
  color: black;
  font-family: $c-bold;
  text-align: center;
  text-transform: uppercase;
  background-color: #f9b600;
  text-decoration: none;
  position: sticky;
}
.main-navigation {
  position: fixed;
  padding-top: 10px;
  top: 0;
  width: 100%;
  z-index: 50;
  font-family: $c-medium;
  &__logo {
    padding-left: 0.7rem;
    width: clamp(60px, 8vw + 2rem, 120px);
    height: 100%;
  }
  &__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 50rem) {
      justify-content: space-around;
    }
  }
  &__items-container {
    position: relative;
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
    position: relative;
    z-index: 50;
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

.mobile-nav {
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
  width: 100vw;
  z-index: 30;
  background-color: #002559;
  @media (min-width: 50rem) {
    display: none;
  }
  &__links {
    list-style-type: none;
  }
  &__link {
    font-family: $c-regular;
    color: white;
    font-size: 2rem;
    text-align: right;
  }
  a {
    text-decoration: none;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  animation: fadeIn 0.5s;
}

.fade-leave-active {
  animation: fadeOut 0.5s;
}

.up {
  display: grid;
  color: white;
  place-items: center;
  background-color: #f9b600;
  border: 1px solid black;
  position: fixed;
  z-index: 200;
  height: 50px;
  width: 50px;
  bottom: 0.75rem;
  right: 0.75rem;

  @media screen and (min-width: 1000px) {
    bottom: 2rem;
    right: 2rem;
  }
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
  .arrow {
    width: 100%;
    height: 1.75rem;
    animation: up-down 2s ease infinite;
    .path {
      fill: v-bind(arrowColor);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes up-down {
  0% {
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(-5px);
  }
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
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.appear-enter-active {
  animation: fade-in 0.3s;
}

.appear-leave-active {
  animation: fade-out 0s;
}
</style>
