<script setup>
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";
import MiddleSection from "./MiddleSection.vue";

</script>

<template>
  <main>
    <SideBar />
    <section class="main_content">
      <Header />
      <MiddleSection />

    </section>
  </main>
</template>

<style lang="scss">
main {
  width: 1920px;
  font-size: 15px;
  font-weight: lighter;
  line-height: 15px;
  width: 1920px;
  margin: 0 auto;
}
.main_content {
    padding: 30px 80px 30px 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
body {
  background:#F2F7F8;
}
</style>
