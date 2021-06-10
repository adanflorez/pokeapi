<template>
  <div>
    <template v-for="(pokemon, index) in pokemons">
      <PokemonItem :key="index" :pokemon="pokemon" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PokemonItem from "@/components/list/PokemonItem.vue";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  props: {
    /**
     * Pokemons list property
     */
    pokemons: {
      type: Array,
      default: () => []
    } as PropOptions<Array<Pokemon>>
  },
  components: {
    PokemonItem,
  },
});
</script>

<style scoped>
</style>