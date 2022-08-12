<script setup>
import CatalogTree from "./CatalogTree.vue";
import ModalSearch from "./ModalSearch.vue";
import { onMounted, ref } from "vue";
import { useStore } from "../stores/mainStore";
import Catalog from "./Catalog.vue";
import List from "./List.vue";

const store = useStore();


// let tree = ref({
//   name: "",
//   children: [
//     {
//       name: "",
//     },
//   ],
// });

// async function getCatalog() {
//   const res = await fetch("http://10.10.1.74:80/api/v1/catalog/categories", {
//     headers: store.headers,
//   });

//   const data = (await res.json())[0];
//   tree.value = await data;
//   console.log(tree.value);
// }

// onMounted(() => getCatalog());
</script>

<template>
  <div v-if="store.showModal" class="ovarlay">
    <button @click="store.showModal=false">
      <img src="../assets/Vectorexit.svg" alt="icon" />
      <p>Закрыть</p>
    </button>
    <div class="modal">
      <ModalSearch />
      <section>
        <Catalog />
        <List />
        <!-- <CatalogTree :name="tree.name" :children="tree.children" /> -->
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 600px;
  }
}
.ovarlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
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
