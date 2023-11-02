import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import CocktailRandom from "@/pages/CocktailRandom.vue";
import Cocktail from "@/pages/Cocktail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/random',
      name: 'cocktailRandom',
      component: CocktailRandom
    },
    {
      path: '/cocktails/:rid',
      name: 'cocktails',
      component: Cocktail
    }
  ]
})

export default router
