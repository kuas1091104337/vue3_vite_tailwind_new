<script setup>
import { useCountStore } from "@/stores/count.js";
import { useTestStore } from "@/stores/test.js";
import { storeToRefs } from "pinia";
const store = useCountStore(),
      store1 = useTestStore(),
      {name, num, doubleNum, dataList} = storeToRefs(store1),
      {setName, addOne, user} = store1;
name.value = 'Andy';
</script>

<template>
  <h1>test</h1>
  <p>{{ store.count }}</p>
  <button @click="store.countAdd">add</button>
  <p>{{ name }}</p>
  <button @click="setName">set name</button>
  <p>{{ doubleNum }}, {{ num }}</p>
  <button @click="addOne">add num</button>
  <p>{{ user.name }}</p>
  <pre>
    {{ dataList }}
  </pre>
</template>

<style lang="scss">

</style>