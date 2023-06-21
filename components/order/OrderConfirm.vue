<template
  ><Transition name="fade" mode="out-in">
    <article>
      <div class="location"
        ><h2 class="confirm-order__headline">Enter and select your location</h2>
        <div class="location-search">
          <input
            type="text"
            name="location"
            placeholder="start typing names of cities"
            class="search"
            v-model="typedCity"
            autocomplete="off"
            @keydown="handleBackspace"
          />
          <ul class="results">
            <li v-if="matchingLocations == false && address === ''"
              >No locations found starting with "{{ typedCity }}"</li
            ><li
              v-if="address === ''"
              v-for="location in matchingLocations"
              :key="location"
              @click="handleLocationUpdate(location)"
            >
              {{ location.cityName }}
            </li>
          </ul>
          <h2 class="confirm-order__headline">Address for pickup</h2>
          <input v-model="address" type="text" name="location" disabled class="search" />
        </div>
      </div>

      <form class="confirm-order"
        ><h2 class="confirm-order__headline">Please verify and submit your order</h2>
        <div class="confirm-order-ctr">
          <p class="confirm-order__pgr">By clicking submit you agree to </p>
          <nuxt-link class="confirm-order__privacy" to="/privacy">
            Our Bakery's Terms of Use</nuxt-link
          >
        </div>
        <div class="confirm-order__payment">
          <h3>Payment Information</h3>
          <button @click="$emit(`editClick`)">Edit</button>
          <div class="card-details">
            <img v-if="card_image" :src="card_image" alt="card provider" />
            <p>{{ computedCardNumber }}</p>
          </div>
          <h4>{{ computedName }}</h4>
        </div>
        <div class="confirm-order__pricing"> </div>
        <div class="confirm-order__summary">
          <h3>Order Summary</h3>
          <div class="products">
            <h4>Proudcts Total:</h4>
            <p>{{ totalPrice }}$</p>
          </div>
          <div class="delivery">
            <h4>Delivery Total:</h4>
            <p> 0.00$</p>
          </div>
          <div class="total">Total: {{ totalPrice }}$ </div>
        </div>
        <button @click.capture.prevent="handleOrderNow()" class="order-cta">Order Now</button>
      </form></article
    >
  </Transition>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import { useUserInformation } from '~/stores/userInformation';

const $q = useQuasar();
const userStore = useUserStore();
const userInformation = useUserInformation();

const totalPrice = computed(() => {
  return userStore.GET_TOTAL_PRICE_OF_CART();
});

const props = defineProps({
  card_image: String,
  card_number: String,
  holder_name: String,
  fname: String,
  lname: String,
});

const fetchData = async () => {
  return $fetch('/api/getLocations');
};
const fetchedLocations = await fetchData();

const locations = fetchedLocations.map(({ cityName, address }) => ({ cityName, address }));

const typedCity = ref('');

const matchingLocations = computed(() => {
  if (typedCity.value.length < 1) return;
  const filtered = locations.filter(({ cityName }) =>
    cityName.toLowerCase().startsWith(typedCity.value.toLowerCase()),
  );
  if (filtered.length === 0) return false;
  return filtered;
});

const address = ref('');

const handleLocationUpdate = (selected) => {
  address.value = selected.address;
  typedCity.value = selected.cityName;
};

const computedCardNumber = computed(() => {
  if (!props.card_number) return 'Payment upon pickup. Cash/Card.';
  return '****' + props.card_number.slice(-4);
});

const computedName = computed(() => {
  if (props.holder_name) return props.holder_name;
  return `${props.fname} ${props.lname}`;
});

const handleBackspace = (e: Event) => {
  if (e.key === 'Backspace') {
    console.log('proslo');
    if (address.value !== '') {
      typedCity.value = '';
      address.value = '';
    }
  }
};

const handleOrderNow = function () {
  if (address.value === '') {
    $q.notify({
      color: 'indigo-10',
      textColor: 'red-7',
      message: `You need to enter the location!`,
      position: 'bottom',
      actions: [
        {
          label: 'Dismiss',
          color: 'white',
        },
      ],
      timeout: 4000,
    });
    return;
  }
  userInformation.orderComplete();
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.location {
  &-search {
    position: relative;
  }
  .search {
    border: 1px solid #f9b600;
    width: 100%;
    color: white;
    font-family: $c-medium;
    position: relative;
    margin: 1rem 0rem 2rem 0rem;
    padding: 0.5rem 1rem;
  }

  .results {
    position: absolute;
    width: 100%;
    list-style-type: none;
    color: #002558;
    font-family: $c-bold;
    text-transform: uppercase;
    background-color: #f9b600;
    top: 3.5rem;
    z-index: 20;
    li {
      padding: 0.5rem 1rem;
      border-bottom: 2px solid #002558;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.confirm-order {
  display: flex;
  flex-direction: column;

  justify-content: center;
  &__headline {
    font-family: $c-medium;
    font-size: clamp(1.2rem, 1rem + 2vw, 2rem);
    color: #f9b600;
    text-align: center;
    line-height: 1;
    margin: 1rem 0;
  }
  &__pgr {
    font-family: $c-medium-i;
    color: white;
    display: inline;
    font-size: 1rem;
  }
  &__privacy {
    display: inline-block;
    color: white;
    font-family: $c-medium;
    font-size: 1rem;
  }
  &-ctr {
    text-align: center;
  }
  &__payment {
    margin: 3rem 0rem;
    display: grid;
    grid-template-columns: 1fr;
    padding: 3rem 0rem;
    border: 2px solid #f9b600;
    border-radius: 2rem;
    padding: 1rem;
    @media screen and (min-width: 1400px) {
      grid-template-columns: auto max-content;
      justify-content: space-between;
    }

    h3 {
      color: #f9b600;
      font-family: $c-medium;
      text-transform: uppercase;
      font-size: clamp(1rem, 1rem + 1vw, 1.75rem);
      line-height: 1;
      width: fit-content;
      text-align: center;
    }

    button {
      color: white;
      text-decoration: underline;
      font-size: 1rem;
      justify-self: center;
      font-family: $c-bold;
    }
    .card-details {
      align-items: end;
      display: grid;
      grid-template-rows: 1fr;
      margin-top: 0.5rem;
      grid-template-columns: 1fr;
      justify-content: center;
      gap: 1rem;
      @media screen and (min-width: 1400px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 600px) {
        justify-content: left;
      }
      img {
        width: 3rem;
        align-self: center;
        justify-self: center;
      }
      p {
        display: inline-block;
        color: white;
        font-family: $c-medium;
        font-size: 1rem;
        margin: 0;
        text-align: center;
        padding: 0;
        width: 100%;
      }
    }

    h4 {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 1.5rem;
      color: white;
      font-family: $c-regular;
    }
  }
  &__summary {
    border-top: 2px solid #f9b600;
    border-bottom: 2px solid #f9b600;
    color: white;
    text-align: center;

    margin: 1rem 0rem 1rem 0rem;
    h3 {
      font-family: $c-bold;
      color: #f9b600;
      font-size: 2rem;
      margin-top: 1rem;
    }
    .products {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 1rem;
      font-size: 1rem;
      @media screen and (min-width: 600px) {
        justify-content: unset;
      }
      h4 {
        line-height: 1;
        font-family: $c-regular;
        font-size: 1.5rem;
      }
      p {
        font-family: $c-bold;
        display: inline;
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
    .delivery {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      @media screen and (min-width: 600px) {
        justify-content: unset;
      }
      p {
        font-family: $c-black;
        margin-bottom: 0;
        font-family: $c-bold;
        font-size: 1.5rem;
      }
      h4 {
        line-height: 1;
        font-family: $c-regular;
        font-size: 1.5rem;
      }
    }
    .total {
      font-family: $c-bold;
      color: #f9b600;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
      @media screen and (min-width: 600px) {
        text-align: end;
      }
    }
  }
  .order-cta {
    font-family: $c-bold;
    font-size: 1.5rem;
    padding: 0.25rem 1rem;
    border: 3px solid #f9b600;
    border-radius: 1rem;
    width: 80%;
    margin: 1rem auto 4rem auto;
    color: #f9b600;
    transition: transform 0.5s;
    &:hover {
      transform: scale(0.95);
    }
    @media screen and (min-width: 600px) {
      width: 60%;
    }
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
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
.fade-enter-active {
  animation: fade-in 0.75s;
}

input:-webkit-autofill {
  transition: background-color 9999s ease-in-out 0s;
  -webkit-text-fill-color: white !important;
}
</style>
