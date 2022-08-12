<script setup>
import { useStore } from "../stores/mainStore";
import { watch, ref } from "vue";

const store = useStore();
let products = ref([]);
async function getProducts() {
  const res = await fetch(
    `http://10.10.1.74:80/api/v1/catalog/search/categories-product?categories=${store.checkedProduct.join(",")}`,
    {
      headers: store.headers,
    }
  );
  const data = (await res.json());
  products.value = await data;
  console.log(products.value)
}
console.log(store.checkedProduct.join(","))
watch(store.checkedProduct, () => {
  getProducts();
  console.log("ii");
});
</script>

<template>
  <section>
    <p v-for="product in products" :key="product.id">{{ product.attributes.full_name }}</p>
  </section>
</template>

<style scoped>
section {
  width: 400px;
  height: 620px;
}
</style>
