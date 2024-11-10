<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{ section: number }>();

onMounted(() => {
  console.log(`Child 1.${props.section} on Mounted`);
});
</script>

<template>
  <div
    style="border: 1px solid #ffffff; width: 100%; height: 250px; padding: 16px"
  >
    <p>Child 1.{{ props.section }}</p>
  </div>
</template>

<style scoped></style>
