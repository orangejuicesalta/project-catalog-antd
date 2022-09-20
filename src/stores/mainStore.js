import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useStore = defineStore("main", () => {
  const showModal = ref(false);
  const catalogAPI = "http://10.10.1.74:80/api/v1/catalog/categories";
  const headers = {
    Authorization:
      "Bearer undefined",
    Accept: "application/json",
  };

  return {
    catalogAPI,
    headers,
    showModal,
  };
});
