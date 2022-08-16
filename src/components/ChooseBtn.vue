<script setup>
import { useStore } from "../stores/mainStore";

const store = useStore();
</script>

<template>
  <p>Товар(-ы):</p>
  <button @click="store.showModal = true">Нажмите, чтобы выбрать товар</button>
</template>

<style lang="scss" scoped>
$lighestColor: #f2f7f8;
$darkerColor: #ddeef2;
$darkestColor: #029aad;
$gray: #c4c4c4;

p {
  font-size: large;
  color: #7f7f7f;
  margin-top: 30px;
  margin-bottom: 20px;
}
button {
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  width: 100%;
  height: 60px;
  padding: 20px;
  border-radius: 5px;
  color: $darkestColor;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  border: 1px solid $gray;
  background-color: white;
  cursor: pointer;
}
</style>
