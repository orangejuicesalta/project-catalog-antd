<template>
  <a-tree
    v-model:checkedKeys="checkedKeys"
    checkable
    :height="620"
    :tree-data="productStore.treeData"
    :field-names="fieldNames"
  >
    <template #title="{ name }">
      <span>{{ name }}</span>
    </template>
  </a-tree>
</template>

<script setup>
import { productsStore } from "@/stores/productsStore";
import { ref, watch } from "vue";

const productStore = productsStore();
const checkedKeys = ref([]);
const fieldNames = {
  title: "name",
  key: "id",
};

watch(checkedKeys, () => {
  console.log(checkedKeys);
  productStore.checkedProduct = checkedKeys._rawValue;
});
</script>

<style>
.ant-tree .ant-tree-treenode {
  padding-bottom: 20px !important;
}
.ant-tree {
  font-size: 17px;
  font-weight: 400;
  color: #001529;
}
.ant-tree-checkbox-inner {
  border: 1px solid #029aad !important;
  border-radius: 3px !important;
}
.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
 background-color: #029aad !important;
}
.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
  background-color: #029aad !important;
}
</style>
