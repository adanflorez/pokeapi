<template>
  <div class="flex justify-between items-center mb-2.5 item cursor-pointer">
    <span class="capitalize"> {{ pokemon.name }} </span>
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
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapMutations, mapState } from "vuex";
import StarIcon from "@/assets/img/star.svg";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  components: {
    StarIcon,
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
    toggleFavoritePokemon() {
      this.setFavoritePokemons(this.pokemon);
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