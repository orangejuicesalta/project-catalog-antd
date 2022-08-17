<script setup>
import { tableStore } from "../stores/tableStore";
import { productsStore } from "@/stores/productsStore";

const storeTable = tableStore();
const productStore = productsStore();

function remove(event, product) {
  if (event.target) {
    storeTable.tableItems = storeTable.tableItems.filter(item => item !== product);
    productStore.checkedItems = productStore.checkedItems.filter(item => item !== product.id);
  }
}
</script>

<template>
  <div class="one_product" v-for="(product, index) in storeTable.tableItems" :key="product.id">
    <p class="item">{{ index + 1 }}</p>
    <p class="item">{{ product.attributes.full_name }}</p>
    <div class="wrap item">
      <select class="item">
        <option value="" default selected>Новый(5 шт.)</option>
        <option value="">Брак(5 шт.)</option>
        <option value="">Дефект(5 шт.)</option>
      </select>
    </div>
    <input class="item" type="number" value="1" />
    <img
      class="item icon"
      src="../assets/Vectordelete.svg"
      alt="icon"
      @click="remove($event, product)"
    />
  </div>
</template>

<style lang="scss" scoped>
.one_product {
  background-color: white;
  padding: 16px;
  display: grid;
  grid-template-columns: 25px 600px 270px 270px auto;
  column-gap: 50px;
  &:nth-child(2n + 1) {
    background-color: #f0f0f0;
  }

  input {
    height: 35px;
    width: 270px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    border: solid 1px #c4c4c4;
  }
  .item {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .icon {
    margin-top: 5px;
    margin-right: 30px;
    cursor: pointer;
  }
}
.wrap::after {
  content: url(../assets/Buttonselect.svg);
  position: absolute;
  pointer-events: none;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
}
.wrap {
  display: flex;
  align-items: flex-start;
  position: relative;
  select {
    height: 35px;
    width: 270px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    box-shadow: none;
    border: solid 1px #c4c4c4;
    box-shadow: none;
    appearance: none;
  }
}
</style>
