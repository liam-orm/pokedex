import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
class CurrentPokemon extends Component {
    render () {
        if (!this.props.mainStore.currentPokemon) return null
        const abilities = this.props.mainStore.currentPokemon.abilities.map(ab =>
            <>
                <div key={ab.ability.name} className='pokemon__text'>{ab.ability.name}</div> <br />
            </>
            )

        return (
            <div className='pokemon'>
                <div className='pokemon__title'>{this.props.mainStore.currentPokemon.name}</div>
                <img className='pokemon__image' src={this.props.mainStore.currentPokemon.sprites.front_default} />
                <div>
                    <div className='pokemon__heading'>{this.props.mainStore.currentPokemon.height} decimeters</div> <br />
                    <div className='pokemon__heading'>{this.props.mainStore.currentPokemon.weight} hectograms</div><br />
                    <div className='pokemon__heading'>Species</div><br />
                    <div className='pokemon__text'> {this.props.mainStore.currentPokemon.species.name}</div><br />
                    <div className='pokemon__heading'>Abilities</div><br />
                    <div>{abilities}</div>
                </div>
            </div>
        )
    }
}

export default CurrentPokemon