<script setup>

const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
    <div class="name">
      <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
      <div class="cocktail-name">{{ cocktail.strDrink }}</div>
    </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

.root
  width: calc((100% - 76px)/3)
  margin-right: 38px
  margin-bottom: 20px
  &:nth-child(3n + 3)
    margin-right: 0

.pic
  width: 120px
  height: 120px
  margin: 0 auto
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: 100%

.cocktail-name
  margin-top: 10px
  width: 100%
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  letter-spacing: 0.1em
</style>