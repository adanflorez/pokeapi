<template>
  <div
    class="fixed z-30 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-black-opacity transition-opacity"
        aria-hidden="true"
      ></div>

      <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
        class="
          inline-block
          align-bottom
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:align-middle
          sm:max-w-lg
          w-full
        "
      >
        <div class="bg-white">
          <div class="absolute top-2 right-2">
            <CloseIcon class="cursor-pointer" @click="closeModal" />
          </div>
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CloseIcon from "@/assets/img/close.svg";
import Loading from "./Loading.vue";

export default Vue.extend({
  components: { CloseIcon, Loading },
  methods: {
    /**
     * Method to close modal
     */
    closeModal() {
      this.$emit("closeModal", true);
    },
  },
});
</script>
