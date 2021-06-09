import api from "../axios"

const version = 'v2'

const services = {
    getPokemonList() {
        return api.get(`${version}/pokemon`)
    }
}

export default services;