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
    v-model:value="store.transfer.receiver_id"
    show-search
    placeholder="Введите или выберите склад"
    :options="options"
    :filter-option="filterOption"
  ></a-select>
</template>

<style>
.ant-select-selector {
  width: 695px !important;
  height: 60px !important;
  border: 1px solid #c4c4c4 !important;
  box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3) !important;
  border-radius: 10px !important;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  padding: 15px 25px !important;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input {
  padding: 30px 15px !important;
}
</style>
