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
          <input v-model="address" type="text" name="location" disabled class="search" />
        </div>
      </div>

      <article class="confirm-order"
        ><h2 class="confirm-order__headline">Please verify and submit your order</h2>
        <div class="confirm-order-ctr">
          <p class="confirm-order__pgr">By clicking submit you agree to </p>
          <nuxt-link class="confirm-order__privacy" to="/privacy">
            Our Bakery's Terms of Use</nuxt-link
          >
        </div>
        <div class="confirm-order__payment">
          <h3>Payment</h3> <button>Edit</button>
          <div class="card-details">
            <img v-if="card_image" :src="card_image" alt="card provider" />
            <p>{{ computedCardNumber }}</p>
          </div>
          <h4>{{ holder_name }}</h4>
        </div>
        <div class="confirm-order__pricing"> </div>
        <div class="confirm-order__summary">
          <h3>Order Summary</h3>
          <div class="products">
            <h4>Proudcts Total:</h4>
            <p>123.45$</p>
          </div>
          <div class="delivery">
            <h4>Delivery Total:</h4>
            <p>0.00$</p>
          </div>
          <div class="total">Total: 123.45$ </div>
        </div>
      </article></article
    >
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  card_image: String,
  card_number: String,
  holder_name: String,
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
  return '****' + props.card_number.slice(-4);
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
    li {
      padding: 0.5rem 1rem;
      border-bottom: 2px solid #002558;
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
    grid-template-columns: 1fr 1fr;
    padding: 3rem 0rem;
    border: 2px solid #f9b600;
    border-radius: 2rem;
    padding: 1rem;

    h3 {
      color: #f9b600;
      font-family: $c-medium;
      text-transform: uppercase;
      font-size: 2rem;
    }

    button {
      color: white;
      text-decoration: underline;
      font-size: 1rem;
      justify-self: end;
    }
    .card-details {
      align-items: end;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: max-content max-content;
      gap: 1rem;
      img {
        width: 3rem;
        align-self: center;
      }
      p {
        display: inline-block;
        color: white;
        font-family: $c-medium;
        font-size: 1rem;
        margin: 0;
      }
    }

    h4 {
      justify-self: end;
      font-size: 1.5rem;
      color: white;
      font-family: $c-regular;
    }
  }
  &__summary {
    background-color: #f9b600;
    text-align: center;
    h3 {
      font-family: $c-bold;
      color: #002558;
      font-size: 2rem;
    }
    .products {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1rem;
      h4 {
        line-height: 1;
        font-size: 2rem;
      }
      p {
        font-family: $c-black;
        display: inline;
        font-size: 1rem;
        margin-bottom: 0;
      }
    }
    .delivery {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      p {
        font-family: $c-black;
        margin-bottom: 0;
      }
    }
    .total {
      font-family: $c-bold;
      color: #002558;
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
