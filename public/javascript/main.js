export const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const REGIONS_PKMN_NUMBER_LIMITS = {
	LIMIT_KANTO: 151,
	LIMIT_JOHTO: 100,
	LIMIT_HOENN: 135,
	LIMIT_SINNOH: 107,
	LIMIT_UNOVA: 156,
	LIMIT_KALOS: 72
}

const REGIONS_PKMN_NUMBER_OFFSET = {
	OFFSET_KANTO: 0,
	OFFSET_JOHTO: 151,
	OFFSET_HOENN: 251,
	OFFSET_SINNOH: 386,
	OFFSET_UNOVA: 493,
	OFFSET_KALOS: 649
}

export const { LIMIT_KANTO, LIMIT_JOHTO, LIMIT_HOENN, LIMIT_SINNOH, LIMIT_UNOVA, LIMIT_KALOS } = REGIONS_PKMN_NUMBER_LIMITS

export const { OFFSET_KANTO, OFFSET_JOHTO, OFFSET_HOENN, OFFSET_SINNOH, OFFSET_UNOVA, OFFSET_KALOS } = REGIONS_PKMN_NUMBER_OFFSET

export const obtainPokemonData = async (limit = 151, offset = 0) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
	const data = await res.json()
	return data
}

export const kantoDex = obtainPokemonData()

//Por ahora se recupera un poco la pokedex de Kanto, los primeros 151 pokemones, quedaria crear el HTML y demas
