import { defineStore } from "pinia";
import { useStore } from "./mainStore";
import { onMounted, ref } from "vue";

const store = useStore();

export const warehouseStore = defineStore("waregouse", () => {
  let warehouses = ref([]);
  let options = ref([]);

  async function getWarehouses() {
    const res = await fetch("http://10.10.1.74:80/api/v1/handbook/warehouses/list", {
      headers: store.headers,
    });

    const data = await res.json();
    warehouses.value = await data;
    for (let item of warehouses.value) {
      options.value.push({ value: item.id, label: item.name });
    }
    console.log(options.value);
  }

  onMounted(() => getWarehouses());

  return {
    options,
  };
});
