<script setup>
import Search from "./Search.vue";
</script>

<template>
  <header>
    <section class="left">
      <img src="../assets/Back.svg" alt="icon" />
      <Search />
    </section>
    <section class="right">
      <img class="icon" src="../assets/Iconnotifications.svg" alt="icon" />
      <img class="icon" src="../assets/Iconsettings.svg" alt="icon" />
      <section>
        <img src="../assets/Avaavatar.svg" alt="ava" />
        <div class="user__info">
          <p>firstNAme LAstNAme</p>
          <p>role/position</p>
        </div>
        <img src="../assets/Iconlogout.svg" alt="icon" />
      </section>
    </section>
  </header>
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

header {
  width: 100%;
  @include flexbox(row, 0, space-between, center);
  height: 40px;
  .left {
    @include flexbox(row, 30px, center, center);
    img {
      background-color: $darkerColor;
      padding: 8px;
      border-radius: 5px;
    }
  }
  .right {
    @include flexbox(row, 30px, center, center);
    .icon {
      background-color: $darkerColor;
      padding: 8px;
      border-radius: 5px;
    }
    section {
      @include flexbox(row, 10px, center, center);
      .user__info {
        @include flexbox(column, 5px, center, flex-start);
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
