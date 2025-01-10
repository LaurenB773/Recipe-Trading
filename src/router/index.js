import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';
import Register from '@/components/Register.vue';
import Recipe from '@/components/Recipe.vue';
import About from '@/components/About.vue';


// Define the routes
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: About},
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/profile', name: 'profile', component: Profile},
  { path: '/recipe', name: 'recipe', component: Recipe}
  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // HTML5 history mode (no hash in the URL)
  routes,  // Register the routes
});

export default router;