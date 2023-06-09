<template>
  <footer class="main-footer">
    <div class="foo-dec"><img src="~/assets/images/breadfoo.svg" alt="" /></div>
    <div class="content">
      <h3 class="content__headline">SIGN UP FOR OUR NEWSLETTER</h3>
      <client-only>
        <div class="content__pill">
          <input v-model="email" class="email-input" placeholder="e-mail" name="email-input" />
          <button type="submit" @click="change" class="">Sign Up</button>
        </div></client-only
      >
      <Transition name="fade-in" mode="out-in">
        <label v-if="test" :class="[{ test: test }, 'placeholder-info']" for="email-input"
          >Placeholder for an error/success message.</label
        >
      </Transition>

      <hr class="content__line" />

      <div class="content__information">
        <div class="content__information-image">
          <img src="~/assets/images/logo.svg" />
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
    border: 1px solid white;
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-template-rows: 1fr;

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

.test {
  color: rgb(248, 54, 54);
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
