<script setup>
import { ref, reactive, onMounted } from "vue";
import {useStore} from '../stores/mainStore'

const store = useStore();
let warehouses = ref([]);
let warehouse = reactive({})

async function getWarehouses() {
    const res = await fetch('http://10.10.1.74:80/api/v1/handbook/warehouses/list', {
      headers: store.headers
    })

    const data = await res.json()
    warehouses.value = await data;
}
onMounted(()=> getWarehouses());
</script>

<template>
  <div class="wrapper">
    <select class="gray" v-model="store.transfer.receiver_id">
      <option value="" default selected>Введите или выберите склад</option>
       <option v-for="warehouse in warehouses" :key="warehouse.name" :value="warehouse.id">
        {{ warehouse.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.wrapper::after {
  content: url(../assets/Buttonselect.svg);
  position: absolute;
  pointer-events: none;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.wrapper {
  position: relative;
  select {
    height: 60px;
    width: 695px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    box-shadow: none;
    border: solid 1px #c4c4c4;
    box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
    appearance: none;
    font-weight: 400;
    font-size: medium;
  }
}
 .gray{
    color: #C4C4C4;
  }
</style>
