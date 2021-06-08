<template>
  <div>
    <Loading v-if="isLoading" />
    <template v-else>
      <div class="grid grid-cols-8 gap-4 pt-9">
        <div class="col-start-2 lg:col-start-3 col-span-6 lg:col-span-4">
          <UIInput placeholder="Search" @input="search">
            <SearchIcon
              class="m-4 fill-current text-default-slate"
              slot="icon"
            />
          </UIInput>
        </div>
      </div>
      <FooterButtons />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// Components
import FooterButtons from "@/components/common/FooterButtons.vue";
import Loading from "@/components/common/Loading.vue";
import UIInput from "@/components/ui/UIInput.vue";
// Icons
import SearchIcon from "@/assets/img/search.svg";

export default Vue.extend({
  components: { Loading, FooterButtons, UIInput, SearchIcon },
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
  methods: {
    search(word: String): void {
      console.log(word);
    },
  },
});
</script>
