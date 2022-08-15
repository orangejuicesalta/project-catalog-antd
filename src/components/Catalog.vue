<template>
  <a-tree
    v-model:checkedKeys="checkedKeys"
    checkable
    :height="620"
    :tree-data="treeData"
    :field-names="fieldNames"
  >
    <template #title="{ name }">
      <span>{{ name }}</span>
    </template>
  </a-tree>
</template>

<script setup>
import { productsStore } from "@/stores/productsStore";
import { onMounted, ref, watch } from "vue";
import { useStore } from "../stores/mainStore";

const store = useStore();
const productStore = productsStore();
const checkedKeys = ref([]);
const fieldNames = {
  title: "name",
  key: "id",
};
let treeData = ref([]);

async function getCatalog() {
  const res = await fetch("http://10.10.1.74:80/api/v1/catalog/categories", {
    headers: store.headers,
  });

  const data = await res.json();
  treeData.value = await data;
}

onMounted(() => getCatalog());

watch(checkedKeys, () => {
  console.log(checkedKeys)
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
;
}
</style>
