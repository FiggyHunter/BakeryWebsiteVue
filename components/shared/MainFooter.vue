<template>
  <footer class="main-footer">
    <div class="foo-dec"><img src="~/assets/images/breadfoo.svg" alt="" /></div>
    <div class="content">
      <h3 class="content__headline">SIGN UP FOR OUR NEWSLETTER</h3>
      <client-only>
        <Form
          :validation-schema="schema"
          class="content__pill"
          @invalid-submit="onInvalidSubmit"
          @submit="onSubmit"
        >
          <Field class="email-input" type="email" placeholder="e-mail" name="email" />

          <button type="submit" class="">Sign Up</button>
        </Form>
        <Transition name="fade-in" mode="out-in">
          <label
            v-if="message"
            for="email"
            name="email"
            :class="[{ valid: valid, invalid: invalid }, 'placeholder-info']"
          >
            {{ message }}
          </label>
        </Transition>
      </client-only>

      <hr class="content__line" />

      <div class="content__information">
        <div class="content__information-image">
          <img src="~/assets/images/logo.svg" alt="company logo" />
        </div>
        <div class="content__information-text">
          <p>Bakery Fictional Co.</p>
          <p>Fictional Street 77</p>
          <p>Fictional Country</p>
          <p>Call us at: 000-0000-000</p>
        </div>
      </div>
      <div class="content__links"></div>
      <div class="content__image"></div>
      <div class="content__meta">@ Our Bakery 2023. All Rights Reserved. ©</div>
    </div>
    <div class="foo-dec"><img src="~/assets/images/croissant.svg" alt="" srcset="" /></div>
  </footer>
</template>

<script setup lang="ts">
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

const valid = ref(false);
const invalid = ref(false);
const message = ref('');

function onSubmit(values) {
  message.value = 'Successfully subscribed to the Newsletter!';
  invalid.value = false;
  valid.value = true;
}

function onInvalidSubmit(values) {
  invalid.value = true;
  valid.value = false;
  message.value = 'Please check your email.';
}

const schema = yup.object({
  email: yup.string().email().required(),
});
const test = ref(false);
</script>

<style scoped lang="scss">
@use '../assets/styles/abstracts/variables' as *;
.content {
  font-family: $c-regular;
  color: white;
  &__headline {
    text-align: center;
    font-family: $c-black;
    width: 90%;
    font-size: clamp(1.5rem, 0.5rem + 3vw, 1.75rem);
    margin: 0 auto;
  }
  &__pill {
    position: relative;
    border: 1px solid white;
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-template-rows: 1fr;
    overflow: hidden;

    height: 3rem;
    @media screen and (min-width: 1000px) {
      width: 60%;
    }

    justify-content: space-between;
    border-radius: 2rem;
    input:focus {
      outline: 2px solid goldenrod;
      border-radius: 1.5rem 0rem 0rem 1.5rem;
    }
    input {
      color: white;
      padding: 0rem 1rem;
      background-color: transparent;
    }
    button {
      padding: 0.5rem 0.6rem;
      border-radius: 0rem 2rem 2rem 0rem;
      font-size: 0.9rem;
      line-height: 1;
      align-self: stretch;
      transition: background-color 0.5s;
    }
    button:hover,
    button:focus {
      background-color: goldenrod;
    }
  }
  &__information {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
    }
  }
  hr {
    width: 70%;
    border-color: goldenrod;
  }
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}
.main-footer {
  background-color: #002559;
  padding: 3rem 0rem;
  display: grid;
  grid-template-columns: 1fr;
  .foo-dec {
    display: none;
  }
  @media screen and (min-width: 60.25rem) {
    grid-template-columns: 1fr 2fr 1fr;
    .foo-dec {
      display: grid;
      height: 100%;
      width: 100%;
      img {
        place-self: center;
        width: 70%;
        height: 100%;
        opacity: 100%;
      }
    }
  }
}

.valid {
  color: limegreen;
}

.invalid {
  color: red;
}
.placeholder-info {
  font-size: clamp(0.75rem, 0.35rem + 1vw, 1.1rem);
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-in-enter-active {
  animation: appear 0.5s;
}

.fade-in-leave-active {
  animation: appear reverse 0.5s;
}
</style>
