<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>Header</header>
  <RouterView />
  <footer>Footer</footer>
</template>

<style scoped>
header, footer {
  background: #ddd;
  line-height: 1.4;
  font-size: 28px;
  padding: 7px 0 8px 0;
  text-align: center;
}
</style>
