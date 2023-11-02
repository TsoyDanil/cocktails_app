import { defineStore } from 'pinia'
import axios from "axios";
import {COCKTAILS_BY_INGREDIENT_URL, INGREDIENTS_URL} from "@/constants";

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: []
  }),
  actions: {
    async getIngredients (){
      try {
        const data = await axios.get(INGREDIENTS_URL)
        this.ingredients = data?.data?.drinks
      } catch (e){
        console.log(e)
      }
    },
    async getCocktails(ingredient){
      try {
        const data = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`)
        this.cocktails = data?.data?.drinks
      } catch (e){
        console.log(e)
      }
    },
    setIngredient(value) {
      this.ingredient = value
    }
  }
})
