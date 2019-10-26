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
        console.log('rendering')
        let pokeCards = this.props.mainStore.pokemon.map(item =>
            <div className='pokecard' key={item.name}>{item.name}</div>
        )
        return (
            <div className='pokecard__container'>
                {pokeCards}
            </div>
        )
    }
}

export default PokeCard
