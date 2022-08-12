<script setup>
import {ref} from 'vue'
defineProps({
  label: String,
  nodes: Array,
});
let hideShow = ref(false)

function toggleHideShow() {
    hideShow.value= !hideShow.value
}
</script>

<template>
  <div >
    <div class="label" @click="toggleHideShow">
      <input type="checkbox" />
      {{ label }}
    </div>
    <div class="child" v-if="hideShow">
      <catalog-tree v-for="item in nodes" :label="item.label" :nodes="item.nodes"> </catalog-tree>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
}
.child {
  border-left: 1px solid gray;
  margin-left: 10px;
  padding-left: 10px;
}
</style>
