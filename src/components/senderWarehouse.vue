<script setup>
import { tableStore } from "../stores/tableStore";
import {warehouseStore} from '../stores/warehouseStore'

const storeWarehouse  = warehouseStore()

const storeTable = tableStore();
const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<template>
  <a-select
    v-model:value="storeTable.transfer.sender_id"
    show-search
    placeholder="Введите или выберите склад"
    :options="storeWarehouse.options"
    :filter-option="filterOption"
  ></a-select>
</template>


