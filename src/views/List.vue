<template>
  <div>
    <Loading v-if="isLoading" />
    <template v-else>
      <div ref="infinitelist" class="grid grid-cols-8 gap-4 pt-9 pb-24">
        <div class="col-start-2 lg:col-start-3 col-span-6 lg:col-span-4">
          <UIInput class="mb-10" placeholder="Search" @input="search">
            <SearchIcon
              class="m-4 fill-current text-default-slate"
              slot="icon"
            />
          </UIInput>
          <PokemonList :pokemons="pokemons" />
        </div>
      </div>
      <FooterButtons />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
// Components
import FooterButtons from "@/components/common/FooterButtons.vue";
import Loading from "@/components/common/Loading.vue";
import UIInput from "@/components/ui/UIInput.vue";
// Icons
import SearchIcon from "@/assets/img/search.svg";
import PokemonList from "@/components/list/PokemonList.vue";
import services from "@/http/services";
import { Pokemon } from "@/interfaces/pokemon";

export default Vue.extend({
  components: { Loading, FooterButtons, UIInput, SearchIcon, PokemonList },
  data() {
    return {
      isLoading: true,
      pokemons: [] as Array<Pokemon>,
      urlBase:
        process.env.VUE_APP_BASE_URL +
        process.env.VUE_APP_VERSION +
        "/pokemon?",
      nextPage: "",
    };
  },
  mounted() {
    // IMPORTANT: this timeout is only to be able to see the loading effect of the pokeball
    setTimeout(() => {
      this.getPokemonList();
    }, 2000);
    this.scroll();
  },
  methods: {
    search(word: String): void {
      console.log(word);
    },
    /**
     * This function calls the service that loads a pokemon list
     */
    async getPokemonList(): Promise<void> {
      try {
        const { data } = await services.getPokemonList(this.nextPage);
        this.pokemons = [...this.pokemons, ...data.results];
        this.nextPage = data.next.replace(this.urlBase, "");
        this.setPokemons(this.pokemons);
      } catch (error) {
        alert("Something went wrong");
      }
      this.isLoading = false;
    },
    ...mapMutations(["setPokemons"]),
    scroll() {
      window.addEventListener("scroll", this.validateScroll);
    },
    validateScroll() {
      if (this.isLimitBottom()) {
        this.getPokemonList();
      }
    },
    removeScroll() {
      window.removeEventListener("scroll", this.validateScroll);
    },
    isLimitBottom() {
      const ref = (this.$refs as any).infinitelist;
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const html = document.documentElement;
        return rect.bottom <= (window.innerHeight || html.clientHeight);
      }
    },
  },
});
</script>
