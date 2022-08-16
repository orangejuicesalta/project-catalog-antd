import { defineStore } from "pinia";
import { useStore } from "./mainStore";
import { onMounted, ref, watch } from "vue";

const store = useStore();

export const productsStore = defineStore("product", () => {
  let checkedProduct = ref([]);
  let products = ref([]);
  let selectedItems = ref([]);
  let text = ref("");
  let searchOptions = ref([]);
  let treeData = ref([]);

  async function getProducts() {
    const checkedList = checkedProduct._rawValue.join(",");
    if ((checkedList && text.value.length > 2) || checkedList || text.value.length > 2) {
      const res = await fetch(
        `http://10.10.1.74:80/api/v1/catalog/search/categories-product?categories=${checkedList}&search=${
          text.value.length > 2 ? text.value : ""
        }`,
        {
          headers: store.headers,
        }
      );
      const data = await res.json();
      for (let option of data) {
        searchOptions.value.push(option.attributes.full_name);
      }
      products.value = await data;
    } else {
      products.value = [];
    }
  }

  async function getCatalog() {
    const res = await fetch("http://10.10.1.74:80/api/v1/catalog/categories", {
      headers: store.headers,
    });

    const data = await res.json();
    treeData.value = await data;
  }

  onMounted(() => {
    getCatalog();
  });

  function resetStore() {
    checkedProduct.value = [];
    products.value = [];
    selectedItems.value = [];
  }

  watch(checkedProduct, () => {
    getProducts();
  });

  return {
    resetStore,
    getProducts,
    products,
    checkedProduct,
    selectedItems,
    text,
    treeData,
  };
});
