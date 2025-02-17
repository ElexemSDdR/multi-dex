export const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
export const KANTO_POKEMON_NUMBER_LIMIT = 151

export const obtainPokemonData = async (limit) => {
	const res = await fetch(`${API_URL}?limit=${limit}`)
	const data = await res.json()
	return data
}

export const kantoDex = obtainPokemonData(KANTO_POKEMON_NUMBER_LIMIT)

//Por ahora se recupera un poco la pokedex de Kanto, los primeros 151 pokemones, quedaria crear el HTML y demas
