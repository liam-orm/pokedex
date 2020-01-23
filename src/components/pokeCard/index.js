import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
class PokeCard extends Component { // TODO: add Transitioning
    async componentDidMount () {
        await this.props.mainStore.requestList()
    }

    render () {
        if (!this.props.mainStore.isLoaded) return null
        let pokeCards = this.props.mainStore.pokemon.map((item, i) =>
            <div className='pokecard' hidden={item.hide} onClick={() => {
                this.props.mainStore.getPokemonDetails(item.name)
                }} key={item.name + i}>{item.name}</div>
        )
        return (
            <div className='pokecard__container'>
                {pokeCards}
            </div>
        )
    }
}

export default PokeCard
