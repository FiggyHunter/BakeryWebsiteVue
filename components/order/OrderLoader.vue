<template>
  <article class="thank-you">
    <div v-if="userInformation.ORDER_COMPLETE" class="lds-dual-ring"></div>
    <h1 v-if="userInformation.ORDER_COMPLETE" class="headline"
      >Processing your order, please don't close or refresh this window</h1
    >
    <div v-if="userInformation.THANK_YOU_MSG" class="circle">
      <div class="checkmark"></div>
    </div>
    <h1 v-if="userInformation.THANK_YOU_MSG" class="headline">Thank you for your order!</h1>
  </article>
</template>

<script setup lang="ts">
import { useUserInformation } from '~/stores/userInformation';
const userInformation = useUserInformation();

onMounted(() => {
  document.querySelector('.nav-info').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
</script>

<style lang="scss" scoped>
.thank-you {
  min-height: 50vh;
  width: 100%;
  display: grid;
  place-content: center;
  grid-column: 1/-1;
  .headline {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    line-height: 1;
    font-family: 'Cera Medium';
    position: absolute;
    place-self: center;
    padding-top: 13rem;
    color: #002558;
  }
}

.lds-dual-ring {
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
  &::after {
    content: ' ';
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #123;
    border-color: #123 transparent #123 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

$primary: #8cc63e;
$checkmarkColor: white;
$size: 100px;
$checkmarkFat: 3px;

body {
  padding: 20px;
}

.circle {
  position: absolute;
  place-self: center;
  background: $primary;
  border-radius: 50%;
  width: $size;
  height: $size;
}

.checkmark {
  position: absolute;
  transform: rotate(45deg) translate(-50%, -50%);
  left: 35%;
  top: 45%;
  height: $size/3;
  width: $size/6;
  border-bottom: $checkmarkFat solid $checkmarkColor;
  border-right: $checkmarkFat solid $checkmarkColor;
}
</style>
