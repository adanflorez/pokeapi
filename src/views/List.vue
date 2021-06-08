<template>
  <div>
    <Loading v-if="isLoading" />
    <FooterButtons v-else />
  </div>
</template>

<script lang="ts">
import FooterButtons from "@/components/common/FooterButtons.vue";
import Loading from "@/components/common/Loading.vue";
import Vue from "vue";

export default Vue.extend({
  components: { Loading, FooterButtons },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
});
</script>
