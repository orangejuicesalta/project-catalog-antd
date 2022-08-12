<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "../stores/mainStore";
let options = ref([
  {
    value: "",
    label: "",
  },
]);
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const store = useStore();
let warehouses = ref([]);

async function getWarehouses() {
  const res = await fetch("http://10.10.1.74:80/api/v1/handbook/warehouses/list", {
    headers: store.headers,
  });

  const data = await res.json();
  warehouses.value = await data;
  console.log(warehouses.value);

  for (let item of warehouses.value) {
    options.value.push({ value: item.name});
  }
}
onMounted(() => {
  getWarehouses();
});
</script>

<template>
  <a-auto-complete
    v-model:value="store.transfer.sender_id"
    :options="options"
    placeholder="Введите или выберите склад"
    :filter-option="filterOption"
  />
</template>

<style>
.ant-select-selector {
  padding: 15px 25px !important;
}
</style>
