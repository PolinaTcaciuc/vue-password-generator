import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
/* -------- styles --------  */
import '@/assets/styles/index.scss';
import globalComponentsList from './components/UI/globalComponentsList.js';

const app = createApp(App);
globalComponentsList.forEach(component => {
    app.component(component.name, component);
});

app
.use(store)
.mount('#app')
