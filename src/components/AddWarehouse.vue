<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "../stores/mainStore";

const store = useStore();
let warehouses = ref([]);
let warehouse = reactive({});
defineProps({
  show: Boolean,
});

async function getWarehouses() {
  const res = await fetch("http://10.10.1.74:80/api/v1/handbook/warehouses/list", {
    headers: store.headers,
  });

  const data = await res.json();
  warehouses.value = await data;
}
onMounted(() => getWarehouses());
</script>

<template>
  <aside v-if="show">
    <p>Промежуточный склад:</p>
    <div class="wrapping">
      <select class="gray" v-model="store.transfer.transit_id">
        <option value="" default selected>Выберите промежуточный склад...</option>
        <option v-for="warehouse in warehouses" :key="warehouse.name" :value="warehouse.id">
          {{ warehouse.name }}
        </option>
      </select>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.wrapping::after {
  content: url(../assets/Buttonselect.svg);
  position: absolute;
  pointer-events: none;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.wrapping {
  position: relative;
  select {
    height: 60px;
    width: 665px;
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
p {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: large;
  color: #7f7f7f;
}
.gray {
  color: #c4c4c4;
}
</style>
