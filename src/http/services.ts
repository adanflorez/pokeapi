import api from "../axios"

const version = process.env.VUE_APP_VERSION

const services = {
    getPokemonList(next?: String) {
        const nextPage = next ? `?${next}` : '';
        return api.get(`${version}/pokemon${nextPage}`)
    },
    getPokemonByName(name: String) {
        return api.get(`${version}/pokemon/${name}`)
    }
}

export default services;