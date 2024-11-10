<script setup lang="ts">
import { onMounted } from 'vue';
import FirstChild from '../childs/FirstChild.vue';

onMounted(() => {
  console.log('FirstParent On Mounted');
});
</script>

<template>
  <div style="border: 1px solid #ffffff; padding: 16px">
    <p>Parent 1</p>
    <div
      style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
        padding: 16px;
      "
    >
      <FirstChild v-for="idx in 2" :key="idx" :section="idx" />
    </div>
  </div>
</template>

<style scoped></style>
