const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const REGIONS_PKMN_NUMBER_LIMITS = {
	LIMIT_KANTO: 151,
	LIMIT_JOHTO: 251,
	LIMIT_HOENN: 386,
	LIMIT_SINNOH: 493,
	LIMIT_UNOVA: 649,
	LIMIT_KALOS: 721
}

const REGIONS_PKMN_NUMBER_OFFSET = {
	OFFSET_KANTO: 0,
	OFFSET_JOHTO: 152,
	OFFSET_HOENN: 252,
	OFFSET_SINNOH: 387,
	OFFSET_UNOVA: 494,
	OFFSET_KALOS: 650
}

const { LIMIT_KANTO, LIMIT_JOHTO, LIMIT_HOENN, LIMIT_SINNOH, LIMIT_UNOVA, LIMIT_KALOS } = REGIONS_PKMN_NUMBER_LIMITS

const { OFFSET_KANTO, OFFSET_JOHTO, OFFSET_HOENN, OFFSET_SINNOH, OFFSET_UNOVA, OFFSET_KALOS } = REGIONS_PKMN_NUMBER_OFFSET

const obtainPokemonData = async (limit, offset = 0) => {
	const res = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
	const data = await res.json()
	return data
}

export const kantoDex = obtainPokemonData(LIMIT_KANTO)

//Por ahora se recupera un poco la pokedex de Kanto, los primeros 151 pokemones, quedaria crear el HTML y demas
