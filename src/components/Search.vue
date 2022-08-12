<script setup>
</script>

<template>
<div class="search">
    <img src="../assets/Iconsearch.svg" alt="icon">
<input type="text" placeholder="Поиск"/>
</div>

</template>

<style lang="scss" scoped>
.search{
    display: flex;
    flex-wrap: row;
    justify-content: center;
    gap: 25px
}
input{
    border: none;
    background-color: transparent;
    width: 300px;
    padding-left: 2px;
    font-size:medium;
}
input:focus {
    background-color: white;
    outline: none;
    
}

</style>