import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const tableStore = defineStore("table", () => {
  let tableItems = ref([]);

  let transfer = reactive({
    products: [
      // {
      //     product_id: '',
      //     quality_id: '',
      //     quantity: ''
      // }
    ],
  });

  return {
    tableItems,
    transfer,
  };
});
