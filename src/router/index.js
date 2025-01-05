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
// import { createRouter, createWebHistory } from 'vue-router';
// import Vue from 'vue';
// import Router from 'vue-router'
// import HomePage from '@/components/HomePage.vue';
// import Login from '@/components/Login.vue';
// import Logout from '@/components/Logout.vue';
// import Profile from '@/components/Profile.vue';
// import Register from '@/components/Register.vue';
// import Recipe from '@/components/Recipe.vue';


// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomePage,
//       meta: {
//         requiresAuth: true,
//       },
//     },
//     {
//       path: "/login",
//       name: "login",
//       component: Login,
//       meta: {
//         requiresAuth: false,
//       },
//     },
//     {
//       path: "/logout",
//       name: "logout",
//       component: Logout,
//       meta: {
//         requiresAuth: false,
//       },
//     },
//     {
//       path: "/register",
//       name: "register",
//       component: Register,
//       meta: {
//         requiresAuth: false,
//       },
//     },
//     {
//       path: "/profile",
//       name: "profile",
//       component: Profile,
//     },
//     {
//         path:"/about",
//         name: "about",
//         component: AboutView,
//     },
//     {
//         path: "/recipe",
//         name: "recipe",
//         component: Recipe,
//     }
// ]
// })
// const router = createRouter({
//   history: createWebHistory(), // Use HTML5 History mode (URL doesn't have #)
//   routes,
// });
// Import necessary functions and components