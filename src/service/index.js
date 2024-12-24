import axios from "axios";

export const getPokemonList = async (limit) => {
   return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
}

export const getPokemonSummary = async (url) => {
   return axios.get(url)
}

export const getTypes = async (url) => {
   return axios.get('https://pokeapi.co/api/v2/type')
}

export const getPokemonDetail = async (id) => {
   return  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}