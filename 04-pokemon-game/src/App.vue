<template>
  <div>
    <PokemonPages />
  </div>
</template>

<script>
import PokemonPages from '@/pages/PokemonPages.vue'

export default {
  name: 'App',
  components: {
    PokemonPages,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
