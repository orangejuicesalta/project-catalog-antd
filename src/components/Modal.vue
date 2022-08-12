<script setup>
import CatalogTree from "./CatalogTree.vue";
import ModalSearch from "./ModalSearch.vue";
import { ref } from "vue";
const props = defineProps({
  show: Boolean,
});

let tree = ref({
  label: "root",
  nodes: [
    {
      label: "level1",
      nodes: [
        {
          label: "level1.1",
        },
        {
          label: "level1.2",
          nodes: [
            {
              label: "level1.2.1",
            },
          ],
        },
      ],
    },
    {
      label: 'level2'
    }
  ],
});
</script>

<template>
  <div v-if="show" class="ovarlay">
    <button @click="$emit('close')">
      <img src="../assets/Vectorexit.svg" alt="icon" />
      <p>Закрыть</p>
    </button>
    <div class="modal">
      <ModalSearch />
      <section>
        <CatalogTree :label="tree.label" :nodes="tree.nodes" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$darkestColor: #029aad;

.modal {
  background-color: white;
  position: fixed;
  width: 1300px;
  height: 100vh;
  right: 0;
  z-index: 100;
  padding: 50px;
  section {
    width: 100%;
    height: 100%;
  }
}
.ovarlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
button {
  position: fixed;
  height: 40px;
  width: 130px;
  right: 1300px;
  top: 30px;
  padding: 10px 19px;
  background: $darkestColor;
  border-radius: 10px 0px 0px 10px;
  z-index: 100;
  border: none;
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
  cursor: pointer;
  p {
    font-weight: 400;
    font-size: medium;
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .modal {
    width: 700px;
  }
  button {
    right: 700px;
  }
}
</style>
