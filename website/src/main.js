import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { loadUserData } from './utils/user.js'; 
import { fetechUserServers } from './utils/channel.js'; 
const app = createApp(App);

app.config.globalProperties.$loadUserData = loadUserData;
app.config.globalProperties.$getUserServers = fetechUserServers;

app.use(router).mount('#app')
