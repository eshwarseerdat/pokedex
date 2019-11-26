let button = document.getElementById('btn')
var sea = document.getElementById('input').value

button.addEventListener('click', () => {
  sea = document.getElementById('input').value

  var url = `https://fizal.me/pokeapi/api/v2/id/${sea}.json`
  console.log(sea)
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon)
        console.log(pokemon.stats)
        let name = pokemon.name
        let hp = pokemon.stats[5].base_stat
        let atk = pokemon.stats[4].base_stat
        let def = pokemon.stats[3].base_stat
        let sAtk = pokemon.stats[2].base_stat
        let sDef = pokemon.stats[1].base_stat
        let spd = pokemon.stats[0].base_stat
        let image = pokemon.sprites.front_default
        let abilities = pokemon.abilities[0].ability.name
        let abilities2 = pokemon.abilities[1].ability.name
        let pikachu = new Pokemon(name, hp, atk, def, sAtk , sDef, spd, abilities, abilities2, image)
        pikachu.display()
        eshwar = new Trainer()
        eshwar.add(pikachu)

      })
})

     class Pokemon {
      constructor(name, hp, atk, def, sAtk, sDef, spd, abilities, abilities2, image) {
        this.name = name
        this.hp = hp
        this.image = image
        this.atk = atk
        this.def = def
        this.sAtk = sAtk
        this.sDef = sDef
        this.spd = spd
        this.abilities = abilities
        this.abilities2 = abilities2
      }

      display(){
        let stats = document.getElementById('stats')
        let img = document.getElementById('Img')
        let name = document.getElementById('name')
        let abilities = document.getElementById('abilities')
        name.innerText = this.name
        img.src = this.image
        stats.innerText = `Stats: \n HP: ${this.hp} \n Attack: ${this.atk} \n Defense: ${this.def} \n S. Atk: ${this.sAtk} \n S. Def: ${this.sDef} \n Speed: ${this.spd}`
        abilities.innerText = `Abilities: \n ${this.abilities} \n ${this.abilities2}`
      }
    }

    class Trainer {
      constructor(){
        this.pok = []
      }
      all(){
        return this.pok
      }
      get(name){
        for(let i = 0; i <= this.pok.length; i++){
          return this.pok[i]
        }
      }
      add(pokemon){
        return this.pok.push(pokemon)
      }
    }
