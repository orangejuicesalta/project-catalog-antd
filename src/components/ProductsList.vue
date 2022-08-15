<script setup>
import OneProduct from "./OneProduct.vue";
</script>

<template>
  <div class="products__list__wrap">
    <section>
      <div class="table__titles">
        <p>№</p>
        <p>Название</p>
        <p>Качество</p>
        <p>Количество</p>
      </div>
      <OneProduct />
    </section>
  </div>
</template>

<style lang="scss" scoped>
$lighestColor: #f2f7f8;
$darkerColor: #ddeef2;
$darkestColor: #029aad;
$gray: #c4c4c4;

.products__list__wrap {
  width: 100%;
  border-radius: 5px;
  border: 1px solid $gray;
  section {
    background-color: $darkerColor;
    display: grid;
    grid-template-columns: 1fr;
    .table__titles {
      padding: 16px;
      display: grid;
      grid-template-columns: 25px 600px 270px 270px auto;
      column-gap: 50px;
    }
  }
}
</style>
