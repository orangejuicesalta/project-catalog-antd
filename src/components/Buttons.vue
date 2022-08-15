<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button>{{ text }}</button>
</template>

<style lang="scss" scoped>
$darkestColor: #029aad;

button {
  height: 50px;
  width: 277px;
  border-radius: 5px;
  padding: 13px, 30px, 13px, 30px;
  background-color: $darkestColor;
  color: white;
  font-weight: 400;
  border: none;
  font-size: medium;
  cursor: pointer;
}
</style>
