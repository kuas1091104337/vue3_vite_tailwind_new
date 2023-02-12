import { defineStore, storeToRefs } from 'pinia';
import { computed, reactive, ref } from 'vue';
import axios from 'axios';
import { useCountStore } from './count.js';
export const useTestStore = defineStore('test',() => {
  const name = ref('Amos'),
        num = ref(0),
        dataList = ref([]),
        user = reactive({name:'Mike'}),
        doubleNum = computed(() => num.value * 2),
        countStore = useCountStore(),
        {count} = storeToRefs(countStore),
        setName = () => name.value = 'Mike' + count.value,
        addOne = () => num.value++,
        fetchApiData = async () => {
          try{
            const res = await axios.get('https://run.mocky.io/v3/ee20544c-5db4-46f8-aa46-c1d3fdebf468');
            dataList.value = res.data;
            console.log(res.data);
          }catch(error) {
            console.log(error.response.data);
          }
        };
  return {
    name,
    num,
    dataList,
    user,
    doubleNum,
    setName,
    addOne,
    fetchApiData
  };
});