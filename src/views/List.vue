<template>
  <div>
    <Loading v-if="isLoading" />
    <template v-else>
      <div ref="infinitelist" class="grid grid-cols-8 gap-4 pt-9 pb-24">
        <div class="col-start-2 lg:col-start-3 col-span-6 lg:col-span-4">
          <UIInput
            v-model="pokemonName"
            class="mb-10"
            placeholder="Search"
            @input="search"
          >
            <SearchIcon
              class="m-4 fill-current text-default-slate"
              slot="icon"
            />
          </UIInput>
          <PokemonList :pokemons="pokemonsFiltered" />
          <template v-if="!pokemonsFiltered.length">
            <div class="flex justify-center">
              <div class="text-center">
                <h3 class="text-3xl font-bold text-extra-dark-slate">Uh-oh!</h3>
                <h5 class="text-dark-slate text-lg">
                  You look lost on your journey!
                </h5>
                <UIButton
                  text="Go back home"
                  class="bg-default-primary mx-auto mt-6"
                  @click="goHome"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
      <FooterButtons
        v-if="pokemonsFiltered.length"
        @favoritePokemons="setFavoritesPokemon"
        @allPokemons="setAllPokemons"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
// Components
import FooterButtons from "@/components/common/FooterButtons.vue";
import Loading from "@/components/common/Loading.vue";
import UIInput from "@/components/ui/UIInput.vue";
// Icons
import SearchIcon from "@/assets/img/search.svg";
import PokemonList from "@/components/list/PokemonList.vue";
import services from "@/http/services";
import { Pokemon } from "@/interfaces/pokemon";
import UIButton from "@/components/ui/UIButton.vue";

export default Vue.extend({
  components: {
    Loading,
    FooterButtons,
    UIInput,
    SearchIcon,
    PokemonList,
    UIButton,
  },
  data() {
    return {
      isLoading: true,
      pokemons: [] as Array<Pokemon>,
      pokemonName: "",
      urlBase:
        process.env.VUE_APP_BASE_URL +
        process.env.VUE_APP_VERSION +
        "/pokemon?",
      nextPage: "",
      pokemonsFiltered: [] as Array<Pokemon>,
      showFavorites: false,
      showAllPokemons: true,
    };
  },
  computed: {
    ...mapState(["favoritePokemons", "pokemonsList"]),
  },
  mounted() {
    // IMPORTANT: this timeout is only to be able to see the loading effect of the pokeball
    setTimeout(() => {
      this.getPokemonList();
    }, 2000);
    this.scroll();
  },
  methods: {
    /**
     * filter pokemon by name
     *
     * @param pokemonName - the name of the pokemon to search
     */
    search(pokemonName: string): void {
      if (this.showAllPokemons) {
        let result = this.pokemons.filter((o) => o.name.includes(pokemonName));
        this.pokemonsFiltered = [...result];
      } else {
        let resultFavorites = this.favoritePokemons.filter((o: any) => o.name.includes(pokemonName));
        this.pokemonsFiltered = [...resultFavorites]
      }
    },
    /**
     * This function calls the service that loads a pokemon list
     */
    async getPokemonList(): Promise<void> {
      if (this.showAllPokemons) {
        try {
          const { data } = await services.getPokemonList(this.nextPage);
          this.pokemons = [...this.pokemons, ...data.results];
          this.pokemonsFiltered = this.pokemons;
          this.nextPage = data.next.replace(this.urlBase, "");
          this.setPokemons(this.pokemons);
        } catch (error) {
          alert("Something went wrong");
        }
        this.isLoading = false;
      }
    },
    ...mapMutations(["setPokemons"]),
    /**
     * The event for infinite scroll is initialized
     */
    scroll(): void {
      window.addEventListener("scroll", this.validateScroll);
    },
    /**
     * It is validated if it is the bottom of the page to call
     * the endpoint of the pokemon list
     */
    validateScroll() {
      if (this.isLimitBottom()) {
        this.getPokemonList();
      }
    },
    /**
     * Validate if it is the bottom of the page
     */
    isLimitBottom() {
      const ref = (this.$refs as any).infinitelist;
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const html = document.documentElement;
        return rect.bottom <= (window.innerHeight || html.clientHeight);
      }
    },
    /**
     * Show favorites pokemon
     */
    setFavoritesPokemon() {
      this.showFavorites = true;
      this.showAllPokemons = false;
      this.pokemonsFiltered = this.favoritePokemons;
    },
    /**
     * Show all pokemon
     */
    setAllPokemons() {
      this.showFavorites = false;
      this.showAllPokemons = true;
      this.pokemonsFiltered = this.pokemonsList;
    },
    /**
     * Go back home
     */
    goHome() {
      this.$router.push("/");
    },
  },
});
</script>
