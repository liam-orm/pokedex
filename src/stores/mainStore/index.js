import {observable, action} from 'mobx'
import axios from 'axios'

class MainStore {
    @observable pokemon = {}
    @observable currentPokemon = null

    @observable page = 0
    @observable pokemonCount = 0
    @observable pokemonPageCount = 0

    @observable isLoaded = false

    @action requestList = async () => {

        /*
        TODO:
            - Add Search function
            - Style a better view
            - Add caching to requests.
        */
        let limit = 1000
        // let offset = this.page * limit

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
        try {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => {
                this.currentPokemon = result.data
            })
        } catch (ex) {
            console.error(ex, 'Error occured when requesting details')
        }
    }
}

export

const mainStore = new MainStore()
export default mainStore
