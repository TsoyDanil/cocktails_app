<script setup>
import { Back } from "@element-plus/icons-vue"
import { useRoute, useRouter } from "vue-router";
import {computed} from "vue";
import { ROUTER_PATHS } from "@/constants";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function,
    required: true
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goForCocktailRandom() {
  router.push(ROUTER_PATHS.COCKTAIL_RANDOM)
  if(routeName.value === ROUTER_PATHS.COCKTAIL_RANDOM) {
    router.go()
  }
}

</script>

<template>
  <div class="root">
    <div
        :style="`background-image: url(${imgUrl})`"
        class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
            type="primary"
            :icon="Back"
            circle
            class="back"
            @click="backFunc"
            v-if="isBackButtonVisible"
        />
        <el-button
            class="btn"
            @click="goForCocktailRandom"
        >Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

.root
  height: 100vh
  display: flex
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  width: 50%
  padding: 32px 40px
  position: relative

.btns
  display: flex
  justify-content: space-between
  align-items: center

.btn
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  border-color: $accent
  color: $text
  font-size: 16px
  font-family: 'Raleway', 'Arial', sans-serif
  transition: 0.2s

  &:hover,
  &:active
    background-color: darken($accent, 20%)
    border-color: darken($accent, 20%)

.back
  background-color: transparent
  border-color: #fff
  transition: 0.2s
  &:hover
    border-color: $accent
</style>