<template>
  <div class="flex items-center justify-center text-center h-full">
    <div class="text-center flex-col justify-center items-center">
      <img
        src="@/assets/img/welcome.svg"
        alt="welcome"
        class="mx-auto max-w-xs welcome-img"
      />
      <h2 class="font-bold text-2xl mt-10 welcome-title">Welcome to Pokédex</h2>
      <h4 class="text-dark-slate mt-8 welcome-desc">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        <br />
        to Trainers in the Pokémon world.
      </h4>
      <UIButton
        class="mt-14 bg-default-primary"
        text="Get started"
        @click="goToListView"
      />
    </div>
  </div>
</template>

<script lang="ts">
import UIButton from "@/components/ui/UIButton.vue";
import Vue from "vue";

export default Vue.extend({
  components: { UIButton },
  methods: {
    goToListView() {
      this.$router.push("lista-pokemon");
    },
  },
});
</script>