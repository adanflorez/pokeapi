<template>
  <div class="flex items-center justify-center text-center h-full p-10">
    <div class="text-center flex-col justify-center items-center">
      <PokemonIcon class="welcome-img object-center w-80 mx-auto" />
      <h2 class="font-bold text-2xl mt-10 welcome-title">Welcome to Pokédex</h2>
      <h4 class="text-dark-slate mt-8 welcome-desc">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        <br />
        to Trainers in the Pokémon world.
      </h4>
      <UIButton
        class="mt-14 bg-default-primary mx-auto"
        text="Get started"
        @click="goToListView"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// Components
import UIButton from "@/components/ui/UIButton.vue";
// Icons
import PokemonIcon from "@/assets/img/welcome.svg";

export default Vue.extend({
  components: { UIButton, PokemonIcon },
  methods: {
    goToListView() {
      this.$router.push("lista-pokemon");
    },
  },
});
</script>