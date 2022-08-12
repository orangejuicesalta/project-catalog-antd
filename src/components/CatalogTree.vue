<script setup>
import {ref, watch } from 'vue';
import {useStore} from '../stores/mainStore';

const store = useStore()

async function getCatalog() {
  const res = await fetch ('http://10.10.1.74:80/api/v1/catalog/categories', {
    headers: store.headers 
  })
}

function dig(path = '0', level = 3) {
  const list = [];

  for (let i = 0; i < 4; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };
    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }
    list.push(treeNode);
  }
  return list;
}

    const selectedKeys = ref(['0-0-0', '0-0-1']);
    const checkedKeys = ref(['0-0-0', '0-0-1']);
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });
     treeData: dig()
</script>
<template>
  <a-tree
 
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    default-expand-all
    checkable
    :height="700"
    :tree-data="treeData"
  >
    <template #title="{ title, key }" >
      <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
      <template v-else>{{ title }}</template>
    </template>
  </a-tree>
</template>



<style lang="scss" scoped>

</style>