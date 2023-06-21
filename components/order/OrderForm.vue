<template>
  <section class="order-info">
    <div class="order-limit">
      <h2 class="order-info__headline">{{ formHeadline }}</h2>
      <OrderStepperInfo @one-clicked="goToPage" @two-clicked="goToPage" :page-number="page" />

      <Form
        :validation-schema="getSchemaByPage(page)"
        class="order-form"
        @invalid-submit="onInvalidSubmit"
        @submit="onSubmit"
      >
        <Transition name="fade" mode="out-in">
          <div v-if="page === 1" class="step-one">
            <div class="fname">
              <div>
                <label class="order-info__label" for="fname">First Name</label>
                <ErrorMessage class="error" name="fname" />
              </div>
              <Field v-model="userInformation.fname" :class="['order-info__field']" name="fname">
              </Field>
            </div>
            <div class="lname">
              <div>
                <label class="order-info__label" for="lname">Last Name</label>
                <ErrorMessage class="error" name="lname" />
              </div>
              <Field v-model="userInformation.lname" :class="['order-info__field']" name="lname">
              </Field>
            </div>
            <div class="email">
              <div>
                <label class="order-info__label" for="email">Email Address</label>
                <ErrorMessage class="error" name="email" />
              </div>
              <Field v-model="userInformation.email" :class="['order-info__field']" name="email">
              </Field>
            </div>

            <div class="phone">
              <div>
                <label class="order-info__label" for="phone">Phone </label>
                <ErrorMessage class="error" name="phone" />
              </div>
              <Field v-model="userInformation.phone" :class="['order-info__field']" name="phone">
              </Field>
            </div>
          </div>
        </Transition>
        <Transition name="fade" mode="out-in">
          <div v-if="page === 2" class="step-two">
            <div class="card-name">
              <div>
                <label class="order-info__label" for="card-name">Name on Card</label>
                <ErrorMessage v-if="!inputsDisabled" class="error" name="card-name" />
              </div>
              <Field
                v-model="cardName"
                :class="['order-info__field']"
                name="card-name"
                :disabled="inputsDisabled"
              >
              </Field>
            </div>

            <div class="card-number">
              <div>
                <label class="order-info__label" for="card-number">Card Number</label>
                <ErrorMessage v-if="!inputsDisabled" class="error" name="card-number" />
              </div>

              <div class="card-number-ctr">
                <Field
                  :class="['order-info__field', `card-number-field`]"
                  name="card-number"
                  v-model="cardNumber"
                  v-maska
                  data-maska="####-####-####-####"
                  :disabled="inputsDisabled"
                >
                </Field>
                <Transition name="fade" mode="in-out">
                  <img v-if="cardImageProvider" class="card-proivder" :src="cardImageProvider" />
                </Transition>
              </div>
            </div>

            <div class="card-details-ctr">
              <div>
                <label class="order-info__label" for="exp-date">Expiration Date</label>
                <ErrorMessage v-if="!inputsDisabled" class="error" name="exp-date" />
                <Field
                  @change="checkDate(expDate)"
                  v-model="expDate"
                  :class="['order-info__field']"
                  name="exp-date"
                  v-maska
                  data-maska="AB/##"
                  data-maska-tokens="{ 'A': { 'pattern': '[0-1]' }, 'B': { 'pattern': '[0-9]' }}"
                  placeholder="MM/YY"
                  :disabled="inputsDisabled"
                >
                </Field>
              </div>
              <div>
                <label class="order-info__label" for="security-code">CVV </label>
                <span class="cvv-help">?</span>
                <ErrorMessage v-if="!inputsDisabled" class="error" name="security-code" />
                <Field
                  v-model="securityCode"
                  :class="['order-info__field']"
                  name="security-code"
                  placeholder="272"
                  v-maska
                  data-maska="####"
                  :disabled="inputsDisabled"
                >
                </Field>
              </div>

              <div class="checkmark-ctr">
                <q-toggle
                  class="checkmark"
                  keep-color
                  label="I will pay in store."
                  v-model="payOnSite"
                  color="yellow-7"
                />
              </div>
            </div>
          </div>
        </Transition>

        <button v-if="page !== 3" class="order-now">Next ></button>
      </Form>

      <Transition name="fade" mode="in-out">
        <OrderConfirm
          @editClick="page = 2"
          :holder_name="cardName"
          :card_image="cardImageProvider"
          :card_number="cardNumber"
          :fname="userInformation.fname"
          :lname="userInformation.lname"
          v-if="page === 3"
        />
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import Mastercard from '~/assets/images/mastercard.webp';
import Visa from '~/assets/images/visa.webp';
import { useUserInformation } from '~/stores/userInformation';

const userInformation = useUserInformation();

const page = ref(1);
const cardName = ref('');
const cardNumber = ref('');
const expDate = ref('');
const securityCode = ref('');
const payOnSite = ref(false);

watch(page, async () => {
  if (process.client)
    document
      .querySelector('.order-info__headline')
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const checkDate = (date: string) => {
  const currentMonth = Number(new Date().getMonth() + 1);
  const currentYear = new Date().getFullYear().toString().slice(-2);

  if (currentYear === date.slice(-2) && currentMonth > Number(date.slice(0, -3))) {
    console.log(currentMonth + '/' + currentYear);
    expDate.value = 12 + '/' + currentYear;
  }
  if (
    Number(currentYear) > Number(date.slice(-2)) ||
    Number(currentYear) + 7 < Number(date.slice(-2))
  )
    if (Number(date.substring(0, 2)) > 12) expDate.value = '12' + date.slice(-2);

  expDate.value = '12' + currentYear;

  if (date.slice(0, -3) === '00') expDate.value = '01/' + date.slice(3);
};

const cardImageProvider = computed(() => {
  if (cardNumber.value.charAt(0) === '5' || cardNumber.value.charAt(0) === '2') return Mastercard;
  if (cardNumber.value.charAt(0) === '4') return Visa;
  return false;
});

const schema_one = yup.object({
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
      return /^[\p{L}]+$/u.test(value);
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

const schema_two = yup.object({
  [`card-name`]: yup
    .string()
    .required('Please enter your name on the card.')
    .test('only-letters', 'Do you really have numbers in your name?', (value) => {
      if (/^[\p{L}\p{M}'’čć]+(?:\s[\p{L}\p{M}'’čć]+)*$/u.test(value)) return true;
      else return false;
    }),
  [`card-number`]: yup
    .string()
    .required('Card number is required.')
    .test('19 digits', 'Card number is invalid.', (value) => {
      if (value.length < 19) return false;

      return true;
    })
    .test('only-numbers', 'Card should have only numbers.', (value) => {
      return /^[+\d()\/\-]+$/.test(value);
    }),
  [`exp-date`]: yup
    .string()
    .required('Exp. date is required')
    .test('valid date', 'Date is invalid', (value) => {
      return value.length === 5;
    }),
  [`security-code`]: yup
    .string()
    .required('Security code is required')
    .test('valid date', 'Code is invalid', (value) => {
      return value.length >= 3;
    }),
});

const formHeadline = computed(() => getHeadlineByPage(page.value));
const pagesMeta = [
  { page: 1, headline: 'CONTACT INFORMATION', schema: schema_one },
  { page: 2, headline: 'PAYMENT INFORMATION', schema: schema_two },
  { page: 3, headline: 'Order Summary' },
];

function onSubmit(values) {
  page.value++;
}

function onInvalidSubmit(values) {
  if (payOnSite.value) page.value++;
}

const getHeadlineByPage = (page: number) => {
  const foundHeadline = pagesMeta.find((entry) => entry.page === page);
  return foundHeadline ? foundHeadline.headline : 'Headline not found';
};

const getSchemaByPage = (page: number) => {
  const foundSchema = pagesMeta.find((entry) => entry.page === page);
  return foundSchema ? foundSchema.schema : 'Schema not found';
};

const goToPage = (clickedPage: number) => {
  page.value = clickedPage;
};

const inputsDisabled = computed(() => {
  return payOnSite.value;
});

watch(inputsDisabled, () => {
  if (inputsDisabled.value) {
    cardName.value = '';
    cardNumber.value = '';
    expDate.value = '';
    securityCode.value = '';
  }
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.order-limit {
  width: 90%;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-auto-rows: min-content;
  align-content: center;
}
.fname,
.lname,
.email,
.phone,
.card-name,
.card-number,
.exp-date,
.security-code {
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
  transition: all 0.5s;
  background-color: #002559;

  .step-one {
    display: grid;
    gap: 1rem;
    transition-duration: 0;
  }

  .step-two {
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
    width: 100%;
    &:hover {
      color: #002559;
      background-color: #f9b600;
    }
  }
}

.card-proivder {
  position: absolute;
  width: 2rem;
  justify-self: end;
  align-self: center;
  right: 1rem;
}

.card-number-ctr {
  display: grid;
  position: relative;
}

.card-details-ctr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.cvv-help {
  color: #f9b600;
  font-family: $c-bold;

  text-align: end;
  font-size: 1rem;
}

.checkmark-ctr {
  width: 100%;
  grid-column: 1/-1;
  .checkmark {
    color: white;
    font-size: 1rem;
    font-family: $c-medium-i;
  }
}
.q-checkbox__bg {
  border-color: white !important;
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
