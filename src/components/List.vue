<script setup>
import { productsStore } from "../stores/productsStore";


const store = productsStore();
</script>

<template>
  <div v-if="store.products" class="list">
    <p v-for="product in store.products" :key="product.id">
      <input type="checkbox" v-model="product.id" />{{ product.attributes.full_name }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 620px;
  overflow: auto;
}
</style>
