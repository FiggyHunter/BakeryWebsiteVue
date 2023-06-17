<template>
  <section class="quantity">
    <button @click.capture.prevent="decrementQuantity">--</button>
    <input
      v-model="selectedQuantity"
      type="number"
      @click.capture.prevent
      @change="changeQuantity($event)"
    />
    <button @click.capture.prevent="incrementQuality">+</button>
  </section>
</template>

<script setup lang="ts">
const selectedQuantity = ref(1);
const emit = defineEmits(['supdate']);
const $q = useQuasar();

const decrementQuantity = () => {
  if (selectedQuantity.value <= 1) {
    showWarning();
    return;
  }

  selectedQuantity.value--;
  emit('supdate', selectedQuantity.value);
};

const incrementQuality = () => {
  if (selectedQuantity.value >= 30) {
    showWarning();
    return;
  }
  selectedQuantity.value++;
  emit('supdate', selectedQuantity.value);
};

const showWarning = () => {
  $q.notify({
    color: 'yellow-7',
    textColor: 'indigo-7',
    message: `Quantity must be between 1 and 30 `,
    position: 'bottom',
    actions: [
      {
        label: 'Dismiss',
        color: 'indigo-7',
      },
    ],
    timeout: 4000,
  });
};

const changeQuantity = (e: Event) => {
  selectedQuantity.value = Number(e.target.value);
  if (selectedQuantity.value > 30) {
    selectedQuantity.value = 30;
    showWarning();
  }
  if (selectedQuantity.value < 1) {
    selectedQuantity.value = 1;
    showWarning();
  }
  emit('supdate', selectedQuantity.value);
};
</script>

<style lang="scss" scoped>
.quantity {
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr;
  justify-self: center;
  justify-items: center;
  align-items: center;
}

input {
  width: 60%;
  text-align: center;
  color: white;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}
button {
  white-space: nowrap;
  color: white;
  font-size: 1rem;
  border: 1px solid #f9b600;
  border-radius: 100rem;
  padding: 0.12rem 0.6rem;
  transition: background 0.5s, color 0.5s, transform 0.2s;
  &:hover {
    background-color: #f9b600;
    color: black;
  }
  &:active {
    transform: scale(0.75);
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
