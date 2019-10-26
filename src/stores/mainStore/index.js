import {observable, action} from 'mobx'
import axios from 'axios'

class MainStore {
    @observable pokemon = {}
    @observable page = 0
    @observable pokemonCount = 0

    @observable isLoaded = false

    @action requestList = async () => { // api/v2/pokemon?offset=20&limit=20
        console.log('called')
        let offset = this.page * 20
        let limit = 20

        try {
            await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(result => { // Add caching. Store in local storage maybes
                this.pokemon = result.data.results
                this.pokemonCount = result.data.count

                this.isLoaded = true
            })

            console.log(this.pokemon)
        } catch (ex) {
            console.error(ex, 'Error occured when requesting api.')
        }
    }
}

export

const mainStore = new MainStore()
export default mainStore
