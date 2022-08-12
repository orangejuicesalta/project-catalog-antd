<template>
  <div class="one_product">
    <p class="item">1</p>
    <p class="item">Название товара в одну строку, название товара в одну строку</p>
    <div class="wrap item">
      <select class="item">
        <option value="" default selected>Новый</option>
      </select>
    </div>
    <input class="item" type="text" />
    <img class="item" src="../assets/Vectordelete.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.one_product {
  background-color: white;
  padding: 16px 23px;
  display: grid;
  grid-template-columns: 0.1fr 2.4fr 1.08fr 1.08fr 0.52fr;
  column-gap: 50px;
  input {
    height: 35px;
    width: 270px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    border: solid 1px #c4c4c4;
  }
  .item {
    display: flex;
    align-items: center;
  }
}
.wrap::after {
  content: url(../assets/Buttonselect.svg);
  position: absolute;
  pointer-events: none;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
}
.wrap {
  position: relative;
  select {
    height: 35px;
    width: 270px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    box-shadow: none;
    border: solid 1px #c4c4c4;
    box-shadow: none;
    appearance: none;
  }
}
</style>
