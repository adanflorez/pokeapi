<template>
  <div>
    <PokemonItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokemonItem from "@/components/list/PokemonItem.vue";

export default Vue.extend({
  components: {
    PokemonItem,
  },
});
</script>

<style scoped>
</style>