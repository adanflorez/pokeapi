<template>
  <div>
    <PokemonItem />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PokemonItem from "@/components/list/PokemonItem.vue";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  props: {
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