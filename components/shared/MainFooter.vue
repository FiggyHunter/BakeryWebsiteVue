<template>
  <footer class="main-footer">
    <div class="foo-dec"></div>
    <div class="content">
      <h3 class="content__headline">SIGN UP FOR OUR NEWSLETTER</h3>
      <div class="content__pill">
        <input class="email-input" type="text" placeholder="e-mail" name="email-input" />
        <button type="submit" class="">Sign Up</button>
      </div>
      <label for="email-input">Placeholder for an error/success message.</label>

      <hr class="content__line" />

      <div class="content__information">
        <p>Bakery Fictional Co.</p>
        <p>Fictional Street 77</p>
        <p>Fictional Country</p>
        <p>Call us at: 000-0000-000</p>
      </div>
      <div class="content__links"></div>
      <div class="content__image"></div>
      <div class="content__meta">@ Bakery 2023. All Rights Reserved. ©</div>
    </div>
    <div class="foo-dec"></div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '../assets/styles/abstracts/variables' as *;
.content {
  font-family: $c-regular;
  color: white;
  &__headline {
    text-align: center;
    font-family: $c-bold;
    width: 90%;
    font-size: clamp(1.75rem, 0.5rem + 3vw, 2.5rem);
    margin: 0 auto;
  }
  &__pill {
    border: 1px solid white;
    display: flex;
    height: 3rem;
    justify-content: space-between;
    border-radius: 2rem;
    input:focus {
      outline: 2px solid goldenrod;
      border-radius: 1.5rem 0rem 0rem 1.5rem;
    }
    input {
      color: white;
      padding: 1rem;
    }
    button {
      padding: 0.5rem 0.6rem;
      border-radius: 0rem 2rem 2rem 0rem;
      font-size: 0.9rem;
      line-height: 1;
      align-self: stretch;
      margin-right: -0px;
      transition: background-color 0.5s;
    }
    button:hover,
    button:focus {
      background-color: goldenrod;
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
      display: block;
    }
  }
}
</style>
