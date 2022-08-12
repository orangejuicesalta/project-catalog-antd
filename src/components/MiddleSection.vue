<script setup>
import FromWarehouse from "./FromWarehouse.vue";
import ToWarehouse from "./ToWarehouse.vue";
import ChooseBtn from "./ChooseBtn.vue";
import ProductsList from "./ProductsList.vue";
import AddWarehouse from "./AddWarehouse.vue";
import {ref} from 'vue'

let showTransitSelect = ref(false)
</script>

<template>
  <section class="main">
    <section class="main__content">
      <h2>Создание заявки на перемещение</h2>
      <section class="main__content__section">
        <p>Откуда:</p>
        <p>Куда:</p>
        <FromWarehouse />
        <ToWarehouse />
        <div class="checkbox-area">
          <input type="checkbox" id="check" class="checkbox" @click="showTransitSelect = !showTransitSelect"/>
          <label for="check">Отправить через РЦ</label>
        </div>
      </section>
      <AddWarehouse :show="showTransitSelect" />
      <ChooseBtn />
      <ProductsList />
    </section>
    <button>Создать перемещение</button>
  </section>
</template>

<style lang="scss" scoped>
$lighestColor: #f2f7f8;
$darkerColor: #ddeef2;
$darkestColor: #029aad;
@mixin flexbox($direction, $gap, $property1, $property2) {
  display: flex;
  flex-direction: $direction;
  justify-content: $property1;
  align-items: $property2;
  gap: $gap;
}

.main {
  width: 100%;
  @include flexbox(column, 50px, center, center);
  .main__content {
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    @include flexbox(column, 0, center, flex-start);
    h2 {
      padding-bottom: 30px;
      border-bottom: solid 1px #ddeef2;
      font-weight: 400;
      width: 100%;
    }
    &__section {
      padding-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
      column-gap: 60px;
      .checkbox-area {
        @include flexbox(row, 8px, flex-start, center);
        margin: 10px 0 10px;
      }
      p {
        font-size: large;
        color: #7f7f7f;
      }
    }
  }
  button {
    height: 50px;
    width: 277px;
    border-radius: 5px;
    padding: 13px, 30px, 13px, 30px;
    background-color: $darkestColor;
    color: white;
    font-weight: 400;
    border: none;
    font-size: medium;
    cursor: pointer;
  }
}
</style>
