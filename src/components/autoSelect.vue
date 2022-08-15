<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "../stores/mainStore";
let options = ref([
  {
    value: "",
    label: "",
  },
]);
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
    options.value.push({ value: item.id, label: item.name });
  }
}
onMounted(() => {
  getWarehouses();
});
const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<template>
  <a-select
    v-model:value="store.transfer.sender_id"
    show-search
    placeholder="Введите или выберите склад"
    :options="options"
    :filter-option="filterOption"
  ></a-select>
</template>


