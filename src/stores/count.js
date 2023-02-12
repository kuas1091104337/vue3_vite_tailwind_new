import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCountStore = defineStore('count',() => {
  const count = ref(0),
        countAdd = () => count.value++;
  return {
    count,
    countAdd
  }
});

