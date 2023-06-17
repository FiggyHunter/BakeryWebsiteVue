<template>
  <section class="order-info">
    <div class="order-limit">
      <h2 class="order-info__headline">Contact Information</h2>
      <OrderStepperInfo
        @one-clicked="goToOne"
        :one="formFlow.one"
        :two="formFlow.two"
        :three="formFlow.three"
      />
      <Transition name="fade" mode="in-out">
        <Form
          v-if="formFlow.one"
          class="order-form"
          @invalid-submit="onInvalidSubmit"
          @submit="onSubmit"
          :validation-schema="schema"
        >
          <div class="fname">
            <div>
              <label class="order-info__label" for="fname">First Name</label>
              <ErrorMessage class="error" name="fname" />
            </div>
            <Field :class="['order-info__field']" name="fname" v-model="fname"> </Field>
          </div>
          <div class="lname">
            <div>
              <label class="order-info__label" for="lname">Last Name</label>
              <ErrorMessage class="error" name="lname" />
            </div>
            <Field :class="['order-info__field']" name="lname" v-model="lname"> </Field>
          </div>
          <div class="email">
            <div>
              <label class="order-info__label" for="email">Email Address</label>
              <ErrorMessage class="error" name="email" />
            </div>
            <Field :class="['order-info__field']" name="email" v-model="email"> </Field>
          </div>

          <div class="phone">
            <div>
              <label class="order-info__label" for="phone">Phone </label>
              <ErrorMessage class="error" name="phone" />
            </div>
            <Field :class="['order-info__field']" name="phone" v-model="phone"> </Field>
          </div>

          <button class="order-now">Order now</button>
        </Form>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const formFlow = ref({ one: true, two: false, three: false });

const fname = ref();
const lname = ref();
const email = ref();
const phone = ref();

const schema = yup.object({
  fname: yup
    .string()
    .required('Please enter your first name.')
    .test('only-letters', 'Do you really have numbers in your first name?', (value) => {
      if (/^[a-zA-Z]+$/.test(value)) return true;
      else return false;
    }),
  lname: yup
    .string()
    .required('Please enter your last name.')
    .test('only-letters', 'Do you really have numbers in your last name?', (value) => {
      if (/^[\p{L}]+$/u.test(value)) return true;
      else return false;
    }),
  email: yup.string().email('Please check your email.').required('The email field is required.'),
  phone: yup
    .string()
    .min(7, 'The number must be 7 digits or longer.')
    .required('Can we get your number? ;)')
    .test('only-numbers', "Phone number usually doesn't have letters.", (value) => {
      return /^[+\d()\/\-]+$/.test(value);
    }),
});

function onSubmit(values) {
  formFlow.value.two = true;
  formFlow.value.one = false;
}

function onInvalidSubmit(values) {
  formFlow.value.two = false;
  formFlow.value.one = true;
}

const goToOne = () => {
  formFlow.value.one = true;
  formFlow.value.two = false;
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.order-limit {
  width: 90%;
  margin: 0 auto;
}
.fname,
.lname,
.email,
.phone {
  div {
    display: flex;
    justify-content: space-between;
  }
}

.error {
  min-height: 16px;
  color: red;
  font-family: $c-medium;

  text-align: right;
  display: inline-block;
}
.order-info {
  border: 10px solid #f9b600;
  border-radius: 1rem;
  .order-form {
    display: grid;
    gap: 1rem;
  }
  &__headline {
    line-height: 1;
    margin: 2rem auto 0.5rem auto;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
    font-family: $c-bold;
    text-align: center;
  }
  background-color: #002559;
  &__field {
    border: 2px solid #f9b600;
    width: 100%;
    color: white;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;

    font-size: 1.2rem;
  }
  &__label {
    color: white;
    font-family: $c-medium;
  }
  .location {
    position: relative;
    display: grid;
    .down {
      color: white;
      position: absolute;
      align-self: end;
      justify-self: end;
      right: 1rem;
      bottom: 0.3rem;
    }
  }
  .order-now {
    border: 3px solid #f9b600;
    align-self: end;
    margin: 4rem 0rem;
    padding: 0.5rem;
    color: white;
    font-family: $c-bold;
    transition: all 0.25s;
    &:hover {
      color: #002559;
      background-color: #f9b600;
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
  animation: fade-in 0.3s;
}

.fade-leave-active {
  animation: fade-out 0.3s;
}

input:-webkit-autofill {
  transition: background-color 9999s ease-in-out 0s;
  -webkit-text-fill-color: white !important;
}
</style>
<!-- 

<div class="location">
  <label class="order-info__label" for="location">Select store location</label>
  <input type="search" :class="['order-info__field']" name="location" />
  <div class="down">V</div>
</div>
<div class="location">
  <label class="order-info__label" for="location">Select store location</label>
  <input disabled :class="['order-info__field']" name="location" />
</div> -->
