<script setup>
import Modal from "./Modal.vue";
import {ref} from 'vue';

let showModal = ref(false);

</script>

<template>
    <p>Товар(-ы):</p>
    <button @click="showModal=true">Нажмите, чтобы выбрать товар</button>
    <Modal :show="showModal" @close="showModal=false" />

</template>

<style lang="scss" scoped>
$lighestColor: #f2f7f8;
$darkerColor: #ddeef2;
$darkestColor: #029aad;
$gray: #C4C4C4;

p{
    font-size: large;
    color: #7F7F7F;
    margin-top: 30px;
    margin-bottom: 20px;
 }
 button {
    width: 100%;
    height: 60px;
    padding: 20px;
    border-radius: 5px;
    color: $darkestColor;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    border: 1px solid $gray;
    background-color: white;
    cursor: pointer;
    margin-bottom: 30px;
 }
</style>