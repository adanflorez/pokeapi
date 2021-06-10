<template>
  <div
    class="flex justify-between items-center mb-2.5 item cursor-pointer"
    @click.self="viewDetail"
  >
    <span class="capitalize"> {{ pokemon.name }} </span>
    <Favorite @click.native="toggleFavoritePokemon" :isFavorite="isFavorite" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapMutations, mapState } from "vuex";
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
  computed: {
    isFavorite(): Boolean {
      const pokemon = this.favoritePokemons.find(
        (p: Pokemon) => p.name === this.pokemon.name
      );
      let isFavorite = this.favoritePokemons.includes(pokemon);
      return isFavorite;
    },
    ...mapState(["favoritePokemons"]),
  },
  methods: {
    /**
     * Method to mark or unmark favorite pokemon
     */
    toggleFavoritePokemon() {
      this.setFavoritePokemons(this.pokemon);
    },
    /**
     * Method to see pokemon detail
     */
    viewDetail() {
      console.log("ver detalle");
      this.$emit("showModal", true);
    },
    ...mapMutations(["setFavoritePokemons"]),
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