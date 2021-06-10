<template>
  <div
    class="
      rounded-full
      h-11
      w-11
      bg-ligth-smoke
      flex
      justify-center
      items-center
      cursor-pointer
      text-default-slate
      hover:text-default-secondary
      cursor-pointer
    "
    @click="toggleFavoritePokemon"
  >
    <StarIcon
      class="fill-current hover:text-default-secondary"
      :class="{ 'text-default-secondary': isFavorite }"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapState, mapMutations } from "vuex";
import StarIcon from "@/assets/img/star.svg";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  components: {
    StarIcon,
  },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
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
    ...mapMutations(["setFavoritePokemons"]),
  },
});
</script>

<style scoped>
</style>