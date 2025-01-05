import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router from router/index.js

const app = createApp(App);
app.use(router); // Register the router with the Vue instance
app.mount('#app');
