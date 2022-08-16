<script setup>
import { productsStore } from "../stores/productsStore";

const store = productsStore();

function selectItem(event, product) {
  event.target.parentElement.classList.toggle("checked");
  if (event.target.checked) {
    store.selectedItems.push(product);
  } else {
    store.selectedItems = store.selectedItems.filter(item => item !== product);
  }
}
</script>

<template>
  <div v-if="store.products" class="list">
    <div class="border">
      <p v-for="product in store.products" :key="product.id">
        <input type="checkbox" @change="selectItem($event, product)" />
        <span class="product">{{ product.attributes.full_name }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 620px;
  overflow: auto;
  .border {
    padding-left: 50px;
    border-left: 1px solid #029aad;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    p {
      font-size: 17px;
      font-weight: 400;
      line-height: 17px;
    }
  }
}
.product {
  padding-left: 15px;
}
.checked {
  color: #029aad;
}
</style>
