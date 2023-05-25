<template>
  <HistoryPage />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'history' });
useHead({
  title: `History | Our Bakery`,
  meta: [
    {
      name: 'description',
      content: `Uncover the rich tapestry of our bakery's legacy at [Bakery Name]. Journey through time and discover the story behind our time-honored traditions, passed down through generations. From humble beginnings to becoming a cherished part of the community, our history is woven with passion and dedication.`,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
