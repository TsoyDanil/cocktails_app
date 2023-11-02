import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import CocktailRandom from "@/pages/CocktailRandom.vue";
import Cocktail from "@/pages/Cocktail.vue";
import { ROUTER_PATHS } from "@/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: ROUTER_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTER_PATHS.COCKTAIL_RANDOM,
      name: ROUTER_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom
    },
    {
      path: ROUTER_PATHS.COCKTAILS,
      name: ROUTER_PATHS.COCKTAILS,
      component: Cocktail
    }
  ]
})

export default router
