<script lang="ts" setup>
import { onMounted } from 'vue';

const props = defineProps<{
  name: string;
  age: number;
}>();

function onClick() {}

onMounted(() => {
  console.log(props.name, '<<< ini props');
});
</script>

<template>
  <div v-if="false">
    <p>Nama User: {{ props.name }}</p>
    <p>Umur User: {{ props.age }}</p>
    <button @click="onClick">Sembunyikan Child</button>
  </div>
</template>

<style scoped></style>
