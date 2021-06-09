<template>
  <div class="flex justify-between items-center mb-2.5 item">
    <span class="capitalize">
      {{ pokemon.name }}
    </span>
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
      "
    >
      <StarIcon class="fill-current" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
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
      required: true
    } as PropOptions<Pokemon>
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