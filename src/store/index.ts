import { Pokemon } from '@/interfaces/pokemon'
import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonsList: [] as Array<Pokemon>,
    favoritePokemons: [] as Array<Pokemon>
  },
  mutations: {
    setPokemons: (state, pokemons: Array<Pokemon>) => {
      state.pokemonsList = [...pokemons]
    },
    setFavoritePokemons: (state, pokemon: Pokemon) => {
      const pok = state.favoritePokemons.find((p) => p.name === pokemon.name)
      let isFavorite = state.favoritePokemons.includes(pok as Pokemon);
      if (!isFavorite) {
        state.favoritePokemons.push(pokemon)
      } else {
        let index = state.favoritePokemons.indexOf(pok as Pokemon);
        state.favoritePokemons.splice(index, 1)
      }
    }
  },
  actions: {
  },
  plugins: [vuexLocal.plugin]
})
