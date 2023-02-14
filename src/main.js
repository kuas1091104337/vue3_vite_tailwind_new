import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register';

import '@/assets/scss/normalize.scss';
import './assets/main.css'

const app = createApp(App)
app.directive('focus',{
  mounted(el){
    el.focus();
    console.log(el);
  }
});
import { numPrice } from '@/lib/numToPrice.js';
app.directive('price',{
  mounted(el, binding){
    el.innerText = numPrice(binding.value);
  },
  updated(el, binding){
    el.innerText = numPrice(binding.value);
  }
});
app.use(createPinia());
app.use(router);

app.mount('#app');
