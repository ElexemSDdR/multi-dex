import { 
  kantoDex
} from './main.js'

const $pokedex = document.querySelector('#pokedex')

const renderPokemon = async () => {
  const pkmns = await kantoDex 
  let aux = []
  pkmns.results.forEach(async pkmn => {
    const { url } = await pkmn
    
    try {
      const pkmnData = await fetch(url)
      const pkmnDataJson = await pkmnData.json()
      aux.push(pkmnDataJson)
      
      const sortedPkmns = aux.length === 151 
      ? aux.sort((a, b) => a.order - b.order)
      : null 

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
    } catch (error) {
      $pokedex.innerHTML = `<div class="loader"></div>`
    }
  })
}

await renderPokemon()
