import { createRouter as createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import AboutView from "..views/AboutView.vue";
import RecipeView from "../views/RecipeView.vue";
const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
        path:"/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/profile/recipes",
        name: "recipes",
        component: RecipeView,
    },
    // Figure out views for recipes 
    {
        path: "/recipe",
        name: "recipe",
        component: RecipeView,
    }
]