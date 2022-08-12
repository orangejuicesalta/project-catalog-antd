<script setup>
import { ref } from "vue";
defineProps({
  name: String,
  children: Array,
});
let hideShow = ref(false);

function toggleHideShow() {
  hideShow.value = !hideShow.value;
}
</script>

<template>
  <div>
    <div class="label">
      <input type="checkbox" />
      <span @click="toggleHideShow">{{ name }}</span>
    </div>
    <div class="child" v-if="hideShow">
      <catalog-tree v-for="item in children" :name="item.name" :children="item.children">
      </catalog-tree>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.child {
  margin-left: 10px;
  padding-left: 10px;
}

span {
  padding-left: 5px;
  cursor: pointer;
}
</style>
