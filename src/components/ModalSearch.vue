<script setup>
import { productsStore } from "@/stores/productsStore";

const productStore = productsStore();
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

function searchChange(event) {
  productStore.text = event.target.value;
  productStore.getProducts();
}
</script>
<template>
  <input
    type="text"
    @input="searchChange($event)"
    v-model="productStore.text"
    placeholder="Введите товар..."
    :filter-option="filterOption"
  />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 60px;
  margin-bottom: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  font-size: 17px;
  font-weight: 400;
  box-shadow: 0px 0px 30px rgba(2, 154, 173, 0.15);
}
input:focus {
  outline: none;
}
</style>
