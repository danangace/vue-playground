<script setup lang="ts">
import { onMounted } from 'vue';
import SecondChild from '../childs/SecondChild.vue';

onMounted(() => {
  console.log('SecondParent onMounted');
});
</script>

<template>
  <div style="border: 1px solid #ffffff; padding: 16px">
    <p>Parent 2</p>
    <div
      style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
        padding: 16px;
      "
    >
      <SecondChild v-for="idx in 2" :key="idx" :section="idx" />
    </div>
  </div>
</template>

<style scoped></style>
