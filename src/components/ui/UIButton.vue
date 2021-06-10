<template>
  <button
    class="
      text-white
      font-bold
      px-5
      py-3
      hover:shadow-lg
      rounded-large
      flex
      items-center
      justify-center
    "
    @click="$emit('click', $event)"
  >
    <slot name="icon"></slot>
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>