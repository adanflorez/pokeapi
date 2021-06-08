<template>
  <div class="input-container w-full flex items-center justify-center bg-white">
    <slot name="icon" />
    <input
      :value="value"
      class="w-full outline-none pl-0 p-2"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.input-container {
  display: -ms-flexbox; /* IE10 */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}
</style>