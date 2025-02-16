const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const KANTO_POKEMON_NUMBER_LIMIT = 151

const obtainPokemonData = (limit) => {
	const res = fetch(`${API_URL}?limit=${limit}`)
	const data = res.json()
	return data
}

const kantoDex = obtainPokemonData(KANTO_POKEMON_NUMBER_LIMIT)

//Por ahora se recupera un poco la pokedex de Kanto, los primeros 151 pokemones, quedaria crear el HTML y demas
