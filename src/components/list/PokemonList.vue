<template>
  <div>
    <template v-for="(pokemon, index) in pokemons">
      <PokemonItem @showModal="showModal" :key="index" :pokemon="pokemon" />
    </template>
    <Modal v-if="openModal" @closeModal="closeModal">
      <div slot="content">
        <PokemonDetail />
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
    };
  },
  components: {
    PokemonItem,
    Modal,
    PokemonDetail,
  },
  methods: {
    /**
     * Method to open modal
     */
    showModal(e: boolean) {
      this.openModal = e;
    },
    /**
     * Method to close modal
     */
    closeModal(e: boolean) {
      this.openModal = !e;
    },
  },
});
</script>

<style scoped>
</style>