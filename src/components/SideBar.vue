<script setup>
import router from '@/router';


function signOut() {
    router.push({ path: "/login" })
}
</script>

<template>
  <menu>
    <div class="menu__container">
      <section class="menu__top">
        <img src="../assets/Groupmenu-logo.svg" alt="icon" />
        <div class="menu__element">
          <img src="../assets/Iconicon-1.svg" alt="icon" />
          <p>Продажи</p>
        </div>
        <div class="menu__element">
          <img class='choosen' src="../assets/Icon2.svg" alt="icon" />
          <p>Перемещения</p>
        </div>
        <div class="menu__element">
          <img src="../assets/Filter3.svg" alt="icon" />
          <p>Корректировка</p>
        </div>
        <div class="menu__element">
          <img src="../assets/Icon4.svg" alt="icon" />
          <p>Отчёты по движению</p>
        </div>
        <div class="menu__element">
          <img src="../assets/Icon5.svg" alt="icon" />
          <p>Инвентаризация</p>
        </div>
      </section>
      <section class="menu__bottom">
        <p>Выход</p>
        <img @click="signOut"
        src="../assets/Iconlogout.svg" alt="logout" class='logout'/>
      </section>
    </div>
  </menu>
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

menu {
  background-color: white;
  width: 250px;
  height: 100vh;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 50; 
}
.menu__container {
  // height: 100vh;
  @include flexbox(column, 100px, center, center);
  padding: 50px;
  .menu__top {
    @include flexbox(column, 40px, center, center);
    text-align: center;
    .menu__element {
      width: 100%;
      .choosen {
        background-color: $darkestColor;
        box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.25);
      }
      p {
        margin-top: 18px;
      }
      img {
        background-color: $darkerColor;
        padding: 10px;
        border-radius: 10px;
      }
      img:hover{
        cursor: pointer;
      }
    }
  }
  .menu__bottom {
    width: 150px;
    @include flexbox(row, 17px, center, center); 
    p {
        color: $darkestColor;
        font-weight: bolder;
    }
    .logout{
      cursor: pointer;
    }
  }
}
</style>
