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
    <select class="gray" v-model="store.transfer.sender_id">
        <option  value="" default selected>Введите или выберите склад</option>
        <option v-for="warehouse in warehouses" :key="warehouse.name" :value="warehouse.name">
        {{ warehouse.name }}
      </option>
    </select>
</div>
</template>