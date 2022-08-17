<template>
  <a-tree
    v-model:checkedKeys="productStore.checkedProduct"
    checkable
    :height="620"
    :tree-data="productStore.treeData"
    :field-names="fieldNames"
  >
    <template>
      <span>{{ name }}</span>
    </template>
  </a-tree>
</template>

<script setup>
import { productsStore } from "@/stores/productsStore";

const productStore = productsStore();
const fieldNames = {
  title: "name",
  key: "id",
};

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
