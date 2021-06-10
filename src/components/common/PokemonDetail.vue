<template>
  <div class="w-full">
    <div id="img-detail" class="bg-white flex items-center justify-center">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        alt=""
      />
    </div>
    <div class="p-5 text-dark-slate">
      <span class="font-bold">Name:</span> Pikachu
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Weight:</span> Pikachu
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Height:</span> Pikachu
      <hr class="border-solid border-1 border-dark-smoke my-2.5" />
      <span class="font-bold">Types:</span> Normal, water
      <hr class="border-solid border-1 border-dark-smoke mt-2.5 mb-5" />
      <div class="flex justify-between items-center">
        <UIButton
          text="Share to my friends"
          class="bg-default-primary mt-2.5"
        />
        <Favorite />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UIButton from "@/components/ui/UIButton.vue";
import Favorite from "@/components/common/Favorite.vue";

export default Vue.extend({
  components: { UIButton, Favorite },
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