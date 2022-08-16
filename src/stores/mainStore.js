import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useStore = defineStore("main", () => {
  const showModal = ref(false);
  const catalogAPI = "http://10.10.1.74:80/api/v1/catalog/categories";
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTAuMTAuMS42NTo4MDkwL2FwaS9sb2dpbiIsImlhdCI6MTY2MDU0NDkzOCwiZXhwIjoxNjYxNDA4OTM4LCJuYmYiOjE2NjA1NDQ5MzgsImp0aSI6IkFaRkVBQnY2RllLNmlNMDQiLCJzdWIiOiI4MTUiLCJwcnYiOiI2ZmFjMWQ5ZjU5OTVhMzkxODNmNmRiYTdkY2QyNDZiNGI5ZGRmMjFkIiwiaWQiOjgxNSwiZmlyc3RfbmFtZSI6Inphbmdhci5tIiwicm9sZSI6bnVsbH0.37DKmFxTmeIEa8hRn9sf3eaGHGqpCcJ0KhobD4c1Lp0",
    Accept: "application/json",
  };

  return {
    catalogAPI,
    headers,
    showModal,
  };
});
