import { defineStore } from "pinia";
import { useStore } from "./mainStore";
import { ref, watch } from "vue";

const store = useStore();

export const productsStore = defineStore("product", () => {
  let checkedProduct = ref([]);
  let products = ref([]);

  async function getProducts() {
    console.log("hiiiii");
    const checkedList = checkedProduct._rawValue.join(",");
    if (checkedList) {
      console.log(checkedList);
      const res = await fetch(
        `http://10.10.1.74:80/api/v1/catalog/search/categories-product?categories=${checkedList}`,
        {
          headers: store.headers,
        }
      );
      const data = await res.json();
      products.value = await data;
      console.log(products.value);
    } else {
      products.value = [];
    }
  }

  function resetStore() {
    checkedProduct.value = [];
    products.value = [];
  }

  watch(checkedProduct, () => {
    getProducts();
  });

  return {
    resetStore,
    getProducts,
    products,
    checkedProduct,
  };
});
