import apiClient from './apiClient';

const BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Extracts high resolution official artwork image URL for a Pokemon by ID.
 */
export const getPokemonArtwork = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

/**
 * Extracts default sprite fallback.
 */
export const getPokemonDefaultSprite = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

/**
 * Helper to parse Pokemon ID from PokéAPI resource URL.
 */
export const extractIdFromUrl = (url) => {
  if (!url) return null;
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

/**
 * Fetch list of Pokemons with limit.
 */
export const getPokemonList = async (limit = 150) => {
  try {
    const response = await apiClient.get(`/pokemon?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Pokémon list:', error);
    throw new Error('Unable to connect to Pokémon database. Please try again.');
  }
};

/**
 * Fetch summary for a single Pokemon (types, stats, artwork).
 */
export const getPokemonSummary = async (urlOrId) => {
  try {
    const endpoint = typeof urlOrId === 'number' || !urlOrId.includes('/')
      ? `/pokemon/${urlOrId}`
      : urlOrId.replace(BASE_URL, '');

    const response = await apiClient.get(endpoint);
    const data = response.data;
    
    const id = data.id;
    const artwork = data.sprites?.other?.['official-artwork']?.front_default ||
                    data.sprites?.other?.home?.front_default ||
                    getPokemonArtwork(id);

    return {
      id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      baseExperience: data.base_experience,
      types: data.types,
      stats: data.stats,
      abilities: data.abilities,
      sprites: data.sprites,
      artwork,
      url: `${BASE_URL}/pokemon/${id}/`
    };
  } catch (error) {
    console.error(`Failed to fetch summary for ${urlOrId}:`, error);
    throw new Error('Failed to load Pokémon summary.');
  }
};

/**
 * Fetch available Pokemon types list.
 */
export const getPokemonTypes = async () => {
  try {
    const response = await apiClient.get('/type');
    const validTypes = response.data.results.filter(
      (t) => t.name !== 'unknown' && t.name !== 'shadow'
    );
    return validTypes;
  } catch (error) {
    console.error('Failed to fetch Pokémon types:', error);
    return [];
  }
};

/**
 * Fetch full details for a Pokemon by ID or Name.
 */
export const getPokemonDetail = async (idOrName) => {
  try {
    const response = await apiClient.get(`/pokemon/${idOrName.toString().toLowerCase()}`);
    const data = response.data;
    const id = data.id;

    const artwork = data.sprites?.other?.['official-artwork']?.front_default ||
                    data.sprites?.other?.home?.front_default ||
                    getPokemonArtwork(id);

    return {
      id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      baseExperience: data.base_experience,
      types: data.types,
      stats: data.stats,
      abilities: data.abilities,
      moves: data.moves,
      sprites: data.sprites,
      artwork,
    };
  } catch (error) {
    console.error(`Failed to fetch detail for Pokémon #${idOrName}:`, error);
    throw new Error('Pokémon not found. Please check the name or ID.');
  }
};

// Aliases for backwards capability
export const fetchPokemonList = getPokemonList;
export const fetchPokemonSummary = getPokemonSummary;
export const fetchPokemonTypes = getPokemonTypes;
export const fetchPokemonDetail = getPokemonDetail;

const pokemonApi = {
  getPokemonList,
  getPokemonSummary,
  getPokemonTypes,
  getPokemonDetail,
};

export default pokemonApi;
