<template>
  <div class="absolute w-full bottom-0 footer-buttons">
    <div class="flex items-center justify-center py-5">
      <UIButton
        text="All"
        class="mr-5 w-36 lg:w-72"
        :class="[btnAllClasses]"
        @click="showAllPokemon"
      >
        <ListIcon slot="icon" class="mr-2.5"
      /></UIButton>
      <UIButton
        text="Favorites"
        class="w-36 lg:w-72"
        :class="[btnFavoriteClasses]"
        @click="showFavoritePokemon"
      >
        <StarIcon slot="icon" class="mr-2.5" />
      </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UIButton from "@/components/ui/UIButton.vue";
// Icons
import ListIcon from "@/assets/img/list.svg";
import StarIcon from "@/assets/img/star.svg";

export default Vue.extend({
  components: { UIButton, ListIcon, StarIcon },
  data() {
    return {
      btnAllActive: true,
      btnFavoriteActive: false,
    };
  },
  computed: {
    btnAllClasses(): String {
      return this.btnAllActive ? "bg-default-primary" : "bg-default-slate";
    },
    btnFavoriteClasses(): String {
      return this.btnFavoriteActive ? "bg-default-primary" : "bg-default-slate";
    },
  },
  methods: {
    /**
     * Show pokemon list
     */
    showAllPokemon() {
      this.btnAllActive = true;
      this.btnFavoriteActive = false;
    },
    /**
     * Show the list of favorite pokemon
     */
    showFavoritePokemon() {
      this.btnFavoriteActive = true;
      this.btnAllActive = false;
    },
  },
});
</script>

<style scoped>
.footer-buttons {
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
</style>