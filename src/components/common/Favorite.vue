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
  >
    <StarIcon
      class="fill-current hover:text-default-secondary"
      :class="{ 'text-default-secondary': isFavorite }"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StarIcon from "@/assets/img/star.svg";

export default Vue.extend({
  components: {
    StarIcon,
  },
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
</style>