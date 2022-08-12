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
    v-model:value="store.transfer.receiver_id"
    :options="options"
    placeholder="Введите или выберите склад"
    :filter-option="filterOption"
  />
</template>

<style>
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  width: 695px !important;
  height: 60px !important;
  color: black !important;
  border-radius: 10px;
  border: solid 1px #c4c4c4;
  box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
}
.ant-select-selection-search-input {
  font-weight: 400;
  font-size: medium;
  padding: 30px 15px !important;
}

.ant-select-selection-item {
  padding: 13px !important;
  font-weight: 400;
  font-size: medium;
}
</style>
