<script setup>
import AppLayout from "@/components/AppLayout.vue";
import CocktailThumb from "@/components/CocktailThumb.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";
import {ref} from "vue";

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)
function getCocktails(){
  rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient(){
  rootStore.setIngredient(null)
}
</script>

<template>
  <AppLayout
      :back-func="removeIngredient"
      :is-back-button-visible="!!ingredient"
      img-url="/src/assets/img/bg-1.png"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
              v-model="rootStore.ingredient"
              placeholder="Choose main ingredient"
              size="large"
              class="select"
              filterable
              allow-create
              @change="getCocktails"
          >
            <el-option
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
            />
          </el-select>
          <div class="text">
            Try our delicious cocktail recipes for every occasion.
            Find delicious cocktail recipes by ingredient through our cocktail generator.
          </div>
          <img
              src="/src/assets/img/cocktails-gallery.png"
              alt="cocktails_gallery"
              class="img"
          />
        </div>
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
              v-for="cocktail in cocktails"
              :key="cocktail.idDrink"
              :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import "../assets/styles/main"

.select-wrapper
  padding-top: 50px

.select
  align-self: center
  width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.img
  margin-top: 60px

.cocktails
  display: flex
  align-items: center
  margin-top: 60px
  flex-wrap: wrap
  max-height: 600px
  overflow-y: auto
</style>