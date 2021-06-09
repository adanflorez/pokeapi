import { Pokemon } from '@/interfaces/pokemon'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [] as Array<Pokemon>
  },
  mutations: {
    setPokemons: (state, pokemons: Array<Pokemon>) => {
      state.pokemons = [...pokemons]
    }
  },
  actions: {
  }
})
