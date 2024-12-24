import axios from "axios";

export const getPokemonList = async (limit) => {
   return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
}

export const getPokemonDetails = async (url) => {
   return axios.get(url)
}

export const getTypes = async (url) => {
   return axios.get('https://pokeapi.co/api/v2/type')
}