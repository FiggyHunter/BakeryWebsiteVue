<template>
  <TestTest />
  <div>
    <img :src="`${env}/koala.avif`" alt="" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/ninja');

const runtimeConfig = useRuntimeConfig();

const env = runtimeConfig.public['imagesBase'];
</script>

<style lang="scss"></style>
