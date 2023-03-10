import { createApp } from 'vue'
import './style.css'
// 字体图标
import './assets/font/iconfont.css'
import App from './App.vue'
// 引入路由 node.js 模块查找机制
import router from './router'
// 首次加载避免过多，导致过慢 ui 框架，js 文件
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPluginPersist)

createApp(App).use(router).use(pinia).mount('#app')
