import {observable, action} from 'mobx'
import axios from 'axios'

class MainStore {
    @observable pokemon = {}
    @observable currentPokemon = null

    @observable pokemonCount = 0
    //@observable page = 0
    //@observable pokemonPageCount = 0

    @observable isLoaded = false
    @observable cache = []

    @action requestList = async () => {
        let limit = 1000

        try {
            await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then(result => {
                this.pokemon = result.data.results
                this.pokemonCount = result.data.count

                this.pokemonPageCount = Math.ceil(result.data.count / limit) - 1

                this.isLoaded = true
            })

            console.log(this.pokemon)
        } catch (ex) {
            console.error(ex, 'Error occured when requesting api.')
        }
    }

    @action getPokemonDetails = async (name) => {
        if (this.cache[name]) this.currentPokemon = this.cache[name]
        else {
            try {
                await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => result.json()).then(result => {
                    this.currentPokemon = result
                    this.cache[this.currentPokemon.name] = this.currentPokemon
                })
            } catch (ex) {
                console.error(ex, 'Error occured when requesting details')
            }
        }
    }
}

export

const mainStore = new MainStore()
export default mainStore
