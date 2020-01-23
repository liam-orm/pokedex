import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
class CurrentPokemon extends Component {
    renderWelcomeText = () => {
        return (
            <div className='pokemon__welcome-text'>
                Welcome to the Pokedex built by Liam O'Rourke-Morgan. <br />
                Please select a pokemon to view information about it!
            </div>
        )
    }

    render () {
        if (!this.props.mainStore.currentPokemon) return this.renderWelcomeText()
        const abilities = this.props.mainStore.currentPokemon.abilities.map(ab =>
                <span key={ab.ability.name} className='pokemon__text'>{ab.ability.name}</span>
            )

        return (
            <div className='pokemon'>
                <div className='pokemon__title'>{this.props.mainStore.currentPokemon.name}</div>
                <div className='pokemon__flex'>
                    <img className='pokemon__image' src={this.props.mainStore.currentPokemon.sprites.front_default} />
                    <div className='pokemon__info'>
                        <div className='pokemon__heading'>height : {this.props.mainStore.currentPokemon.height} decimeters</div> <br />
                        <div className='pokemon__heading'>weight : {this.props.mainStore.currentPokemon.weight} hectograms</div><br />
                        <div className='pokemon__heading'>Species</div>
                        <span className='pokemon__text'>{this.props.mainStore.currentPokemon.species.name}</span><br />
                        <div className='pokemon__heading'>Abilities</div><div className='pokemon__ability-container'>{abilities}</div><br />
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentPokemon