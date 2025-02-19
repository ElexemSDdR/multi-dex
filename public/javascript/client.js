import { 
  API_URL,
  kantoDex,
  obtainPokemonData,
  LIMIT_KANTO,
  LIMIT_HOENN,
  LIMIT_SINNOH,
  LIMIT_UNOVA,
  LIMIT_KALOS,
  OFFSET_KANTO,
  OFFSET_JOHTO,
  OFFSET_HOENN,
  OFFSET_SINNOH,
  OFFSET_UNOVA,
  OFFSET_KALOS,
  LIMIT_JOHTO
} from './main.js'

const $pokedex = document.querySelector('#pokedex')

const $kanto = document.querySelector('#kanto')
const $johto = document.querySelector('#johto')
const $hoenn = document.querySelector('#hoenn')
const $sinnoh = document.querySelector('#sinnoh')
const $unova = document.querySelector('#unova')
const $kalos = document.querySelector('#kalos')

const renderPokemon = async (regionDex = kantoDex) => {
  const pkmns = await regionDex 
  let aux = []
  await pkmns.results.forEach(async pkmn => {
    const { url } = pkmn
    
    try {
      aux = []
      const pkmnData = await fetch(url)
      const pkmnDataJson = await pkmnData.json()
      aux.push(pkmnDataJson)
      
      let sortedPkmns = []
      if (
          aux.length === LIMIT_KANTO || 
          aux.length === LIMIT_JOHTO || 
          aux.length === LIMIT_HOENN || 
          aux.length === LIMIT_SINNOH || 
          aux.length === LIMIT_UNOVA || 
          aux.length === LIMIT_KALOS
        ) {
        sortedPkmns = aux.sort((a, b) => a.id - b.id)
      }

      $pokedex.innerHTML = ''
      sortedPkmns.forEach(sortPkmn => {
        const { sprites, name } = sortPkmn
        
        $pokedex.innerHTML += `
          <div class="individual-pokemon">
            <image src="${sprites.front_default}" alt="${name}">
            <h3>${name}</h3>
          </div>
        `      
      })
      console.log(aux)
    } catch (error) {
      $pokedex.innerHTML = `<div class="loader"></div>`
    }
  })
}

$kanto.addEventListener('click', async () => {
  await renderPokemon()
})

$johto.addEventListener('click', async () => {
  const johtoPkmns = await obtainPokemonData(LIMIT_JOHTO, OFFSET_JOHTO)
  await renderPokemon(johtoPkmns)
})

$hoenn.addEventListener('click', async () => {
  const hoennPkmns = await obtainPokemonData(LIMIT_HOENN, OFFSET_HOENN)
  await renderPokemon(hoennPkmns)
})

$sinnoh.addEventListener('click', async () => {
  const sinnohPkmns = await obtainPokemonData(LIMIT_SINNOH, OFFSET_SINNOH)
  await renderPokemon(sinnohPkmns)
})

$unova.addEventListener('click', async () => {
  const unovaPkmns = await obtainPokemonData(LIMIT_UNOVA, OFFSET_UNOVA)
  await renderPokemon(unovaPkmns)
})

$kalos.addEventListener('click', async () => {
  const kalosPkmns = await obtainPokemonData(LIMIT_KALOS, OFFSET_KALOS)
  await renderPokemon(kalosPkmns)
})

document.addEventListener('DOMContentLoaded', async () => {
  await renderPokemon()
})