<template>
  <div class="w-full">
    <div id="img-detail" class="bg-white flex items-center justify-center">
      <img height="180" width="180" :src="pokemonImage" alt="pokemon" />
    </div>
    <div class="p-5 text-dark-slate capitalize">
      <span class="font-bold">Name:</span> {{ pokemon.name }}
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Weight:</span> {{ pokemon.weight }}
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Height:</span> {{ pokemon.height }}
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Types:</span> {{ types }}
      <hr class="border-solid border-1 border-dark-smoke mt-2.5 mb-5" />
      <div class="flex justify-between items-center">
        <UIButton
          @click="copyToCliboard"
          text="Share to my friends"
          class="bg-default-primary mt-2.5"
        />
        <Favorite :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import UIButton from "@/components/ui/UIButton.vue";
import Favorite from "@/components/common/Favorite.vue";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  components: { UIButton, Favorite },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    } as PropOptions<Pokemon>,
  },
  computed: {
    types(): String {
      let types: Array<String> = [];
      this.pokemon.types?.map((type: any) => {
        types.push(type.type.name);
      });
      return types ? types.join(", ") : "";
    },
    pokemonImage(): String {
      return this.pokemon.imageUrl
        ? this.pokemon.imageUrl
        : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    },
  },
  methods: {
    /**
     * Method to copy pokemon to clipboard
     */
    copyToCliboard(): void {
      const el = document.createElement("textarea");
      el.value = `${this.pokemon.name}, ${this.pokemon.weight}, ${this.pokemon.height}, ${this.types}`;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection()!.rangeCount > 0
          ? document.getSelection()!.getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection()!.removeAllRanges();
        document.getSelection()!.addRange(selected);
      }
    },
  },
});
</script>

<style scoped>
#img-detail {
  height: 220px;
  background: url("https://i.ibb.co/JrY01qY/bg-detail.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>