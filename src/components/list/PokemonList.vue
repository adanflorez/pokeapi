<template>
  <div>
    <template v-for="(pokemon, index) in pokemons">
      <PokemonItem
        @pokemonName="getPokemonByName"
        :key="index"
        :pokemon="pokemon"
      />
    </template>
    <Modal v-if="openModal" :isLoading="isLoading" @closeModal="closeModal">
      <div slot="content">
        <PokemonDetail v-if="!isLoading" :pokemon="pokemon" />
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PokemonItem from "@/components/list/PokemonItem.vue";
import { Pokemon } from "@/interfaces/pokemon";
import Modal from "@/components/common/Modal.vue";
import PokemonDetail from "../common/PokemonDetail.vue";
import services from "@/http/services";
import Loading from "../common/Loading.vue";

export default Vue.extend({
  props: {
    /**
     * Pokemons list property
     */
    pokemons: {
      type: Array,
      default: () => [],
    } as PropOptions<Array<Pokemon>>,
  },
  data() {
    return {
      openModal: false,
      pokemon: {} as Pokemon,
      isLoading: false,
    };
  },
  components: {
    PokemonItem,
    Modal,
    PokemonDetail,
    Loading,
  },
  methods: {
    /**
     * Method to open modal
     */
    showModal() {
      this.openModal = true;
    },
    /**
     * Method to close modal
     */
    closeModal(e: boolean) {
      this.openModal = !e;
    },
    /**
     * Services to get pokemon by name
     */
    getPokemonByName(name: String) {
      try {
        this.isLoading = true;
        this.showModal();
        // IMPORTANT: this timeout is only to be able to see the loading effect of the pokeball
        setTimeout(async () => {
          const { data } = await services.getPokemonByName(name);
          this.parsePokemon(data);
          this.isLoading = false;
        }, 2000);
      } catch (error) {}
    },
    /**
     * Parse pokemon
     */
    parsePokemon(data: any) {
      this.pokemon = data;
      this.pokemon.imageUrl = data.sprites.front_default;
    },
  },
});
</script>

<style scoped>
</style>