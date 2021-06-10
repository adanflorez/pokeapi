<template>
  <div
    class="flex justify-between items-center mb-2.5 item cursor-pointer"
    @click.self="viewDetail"
  >
    <span class="capitalize"> {{ pokemon.name }} </span>
    <Favorite :pokemon="pokemon" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Pokemon } from "@/interfaces/pokemon";
import Favorite from "../common/Favorite.vue";

export default Vue.extend({
  components: {
    Favorite,
  },
  props: {
    /**
     * Pokemon object property
     */
    pokemon: {
      type: Object,
      required: true,
    } as PropOptions<Pokemon>,
  },
  methods: {
    /**
     * Method to see pokemon detail
     */
    viewDetail() {
      this.$emit("pokemonName", this.pokemon.name);
    },
  },
});
</script>

<style scoped>
.item {
  background: #ffffff;
  border-radius: 5px;
  padding: 17px 10px 17px 20px;
}
</style>