<template>
  <main class="contact">
    <div class="contact__form-container">
      <h1 class="contact__headline">Get in touch with us!</h1>
      <form class="contact__form">
        <div class="contact__field name">
          <input required class="contact__input" type="text" />
          <label class="contact__label" for="">What is your full name?</label>
          <div class="contact__validation"></div>
        </div>
        <div class="contact__field email">
          <input required class="contact__input" type="text" />
          <label class="contact__label" for="">E-mail</label>
          <div class="contact__validation"></div>
        </div>
        <div class="contact__field phone">
          <input required class="contact__input" type="text" />
          <label class="contact__label" for="">Phone Number</label>
          <div class="contact__validation"></div>
        </div>
        <div class="contact__field subject">
          <input required class="contact__input" type="text" />
          <label class="contact__label" for="">What is the subject?</label>
          <div class="contact__validation"></div>
        </div>
        <div class="contact__field message">
          <span
            :class="[`contact__message`, { 'contact__message-active': spanActive }]"
            @input="updateText"
            @click="hello"
            role="textbox"
            contenteditable="true"
          >
          </span>
          <!-- <textarea required class="contact__message" type="text"> </textarea> -->
          <label class="contact__label" for="">Message</label>
        </div>
        <button class="contact__button button" type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
const hello = () => {
  console.log(spanHasText.value);
};

const spanActive = ref(false);

const updateText = (e) => {
  if (e.target.innerText) {
    spanActive.value = true;
  } else {
    spanActive.value = false;
  }
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;

.contact {
  display: grid;
  align-content: center;
  min-height: 100vh;
  padding: clamp(6rem, 1rem + 10vw, 7rem) 0rem 5rem 0rem;
  background-color: #241d54;
  font-family: $c-regular;
  &__headline {
    margin-top: 0;
    color: white;
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: clamp(1.4rem, 1.4rem + 2vw, 3.2rem);
    font-family: $c-bold;
    @media screen and (min-width: 700px) {
      text-align: left;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @media screen and (min-width: 600px) {
      display: grid;
      justify-content: unset;
      height: 100%;
      grid-template-areas:
        'name name'
        'email phone'
        'subject subject'
        'message message'
        'button button';
      .name {
        grid-area: name;
      }
      .email {
        grid-area: email;
        input {
          margin-right: 0 !important;
        }
        label {
          left: 10%;
        }
      }
      .phone {
        grid-area: phone;
        input {
          margin-left: 0 !important;
        }
        label {
          left: 0%;
        }
      }
      .subject {
        grid-area: subject;
      }
      .message {
        grid-area: message;
        border-bottom: 1px solid white;
        width: 90%;
        justify-self: center;
      }
      .button {
        grid-area: button;
      }
    }
  }
  &__field {
    position: relative;
  }

  &__message {
    @media screen and (max-width: 600px) {
      width: 90%;
      ~ label {
        left: 1.2rem !important;
      }
      border-bottom: 1px solid white !important;
    }
    &:focus {
      ~ label {
        top: -1.6rem;
      }
      outline: none;
    }
    border-bottom: 1px solid white;
    width: 100%;
    margin: 0 auto;
    display: block;
    color: white;
    z-index: 20;
    position: relative;
    max-height: fit-content;
    font-size: clamp(0.6rem, 0.5rem + 2vw, 1.3rem);
    padding-top: 0.2rem;
    word-break: break-word;
    border-color: transparent !important;
    ~ label {
      left: 0px;
    }
  }

  &__message-active {
    ~ label {
      top: -1.6rem;
    }
    outline: none;
    border-color: transparent;
  }

  &__input {
    border-bottom: 1px solid white;
    width: 90%;
    margin: 0 auto;
    display: block;
    color: white;
    z-index: 20;
    position: relative;
    font-size: clamp(0.6rem, 0.5rem + 2vw, 1.3rem);
  }

  &__input:focus {
    ~ label {
      top: -1.5rem;
    }
    outline: none;
    border-color: goldenrod;
  }

  &__input:valid {
    ~ label {
      top: -1.5rem;
    }
    border-color: greenyellow;
  }

  &__label {
    display: block;
    position: absolute;
    color: white;
    left: 5%;
    top: -30%;
    transition: top 0.6s;
    z-index: 2;
    font-size: clamp(0.6rem, 0.5rem + 2vw, 1.3rem);
  }

  &__validation {
    position: absolute;
    color: white;
    left: 5%;
  }

  &__button {
    background-color: goldenrod;
    display: block;
    width: 40%;
    color: white;
    font-family: $c-bold;
    transition: transform 0.2s;
    place-self: center;
    font-size: clamp(0.6rem, 0.5rem + 2vw, 1.3rem);
    display: grid;
    place-content: center;
    &:hover {
      transform: scale(0.9);
    }
    text-transform: uppercase;
    padding: 1rem;
  }
}

.dl {
  background-color: red;
}
</style>
