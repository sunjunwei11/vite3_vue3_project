<script setup>
import { useCounterStore } from '@/store';
const counter = useCounterStore();
function addCount() {
  counter.accumulate();
}
</script>

<template>
  <h1>HomeView</h1>
  <div>Home counter: {{ counter.count }}</div>
  <button @click="addCount">Add count</button>
</template>

<style scoped lang="less"></style>
