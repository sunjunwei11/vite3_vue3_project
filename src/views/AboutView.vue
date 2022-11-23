<script setup>
import { useCounterStore } from '@/store';
const counter = useCounterStore();
function addCount() {
  counter.accumulate();
}
</script>

<template>
  <h1>AboutView</h1>
  <div>About counter: {{ counter.count }}</div>
  <button @click="addCount">Add count</button>
</template>

<style scoped></style>
