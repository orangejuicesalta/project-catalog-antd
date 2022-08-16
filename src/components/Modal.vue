<script setup>
import ModalSearch from "./ModalSearch.vue";
import { useStore } from "../stores/mainStore";
import Catalog from "./Catalog.vue";
import List from "./List.vue";
import { productsStore } from "@/stores/productsStore";
import { tableStore } from "../stores/tableStore";
import Buttons from "./Buttons.vue";

const storeTable = tableStore();
const store = useStore();
const productStore = productsStore();
function closeModal() {
  store.showModal = false;
  productStore.resetStore();
}

function select() {
  if (productStore.selectedItems) {
    storeTable.tableItems = productStore.selectedItems;
    store.showModal = false;
  } else {
    alert("Choose products");
  }
}
</script>

<template>
  <div v-if="store.showModal" class="ovarlay" @click.self="store.showModal=!store.showModal">
    <div>
      <button class="modal__close" @click="closeModal()">
        <img src="../assets/Vectorexit.svg" alt="icon" />
        <p>Закрыть</p>
      </button>
    </div>

    <div class="modal">
      <div class="modal__content">
        <ModalSearch />
        <section>
          <Catalog />
          <List />
        </section>
        <Buttons @click="select()" text="Выбрать товар" class="button" />
      </div>
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
  animation: fadeInFromLeft 0.25s both;
  &__close {
    position: absolute;
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
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
.button {
  display: block;
  margin: 50px auto 0 auto;
  width: 202px;
  height: 50px;
  font-size: 20px;
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

@media only screen and (max-width: 1000px) {
  .modal {
    width: 700px;
  }
  button {
    right: 700px;
  }
}
</style>
