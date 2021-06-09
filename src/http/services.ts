import api from "../axios"

const version = process.env.VUE_APP_VERSION

const services = {
    getPokemonList(next?: String) {
        const nextPage = next ? `?${next}` : ''; 
        return api.get(`${version}/pokemon${nextPage}`)
    }
}

export default services;