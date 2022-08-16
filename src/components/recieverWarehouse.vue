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
    v-model:value="storeTable.transfer.reciever_id"
    show-search
    placeholder="Введите или выберите склад"
    :options="storeWarehouse.options"
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
