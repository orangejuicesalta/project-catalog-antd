<script setup>
import { tableStore } from "../stores/tableStore";
import { warehouseStore } from "../stores/warehouseStore";

defineProps({
  show: Boolean,
});

const storeWarehouse = warehouseStore();

const storeTable = tableStore();
const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<template>
  <aside v-if="show">
    <p>Промежуточный склад:</p>
    <a-select
      v-model:value="storeTable.transfer.transit_id"
      show-search
      placeholder="Введите или выберите склад"
      :options="storeWarehouse.options"
      :filter-option="filterOption"
    ></a-select>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  margin-top: 30px;
  font-size: 17px;
  font-weight: 400;
  p{
    color: #7f7f7f
  }
}</style>
