<script setup>
import { useStore } from "@/stores/mainStore";

const store = useStore();
</script>

<template>
  <div class="one_product" v-for="(product, index) in store.tableItems" :key="product.id">
    <p class="item">{{ index + 1 }}</p>
    <p class="item">{{ product.attributes.full_name }}</p>
    <div class="wrap item">
      <select class="item">
        <option value="" default selected>Новый</option>
      </select>
    </div>
    <input class="item" type="text" />
    <img class="item icon" src="../assets/Vectordelete.svg" alt="" />
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
