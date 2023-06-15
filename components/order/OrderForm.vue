<template>
  <section class="order-info">
    <div class="order-limit">
      <Form class="order-form">
        <h2 class="order-info__headline">Contact Information</h2>
        <div class="fname">
          <label class="order-info__label" for="fname">First Name</label>
          <Field :class="['order-info__field']" name="fname"> </Field>
        </div>
        <div class="lname">
          <label class="order-info__label" for="lname">Last Name</label>
          <Field :class="['order-info__field']" name="lname"> </Field>
        </div>
        <div class="email">
          <label class="order-info__label" for="email">Email Address</label>
          <Field :class="['order-info__field']" name="email"> </Field>
        </div>

        <div class="phone">
          <label class="order-info__label" for="phone">Phone</label>
          <Field :class="['order-info__field']" name="phone"> </Field>
        </div>
        <div class="location">
          <label class="order-info__label" for="location">Select store location</label>
          <input type="search" :class="['order-info__field']" name="location" />
          <div class="down">V</div>
        </div>
        <div class="location">
          <label class="order-info__label" for="location">Select store location</label>
          <input disabled :class="['order-info__field']" name="location" />
        </div>
      </Form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.order-limit {
  width: 90%;
  margin: 0 auto;
}
.order-info {
  border: 10px solid #f9b600;
  border-radius: 1rem;
  .order-form {
    display: grid;
    gap: 1rem;
  }
  padding-bottom: 4rem;
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
}
</style>
