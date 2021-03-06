import App from './App.vue'
import ElementPlus  from 'element-plus';
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
import router from './router/router'
import { createApp } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import store from './store';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(store)
 
app.mount('#app')

