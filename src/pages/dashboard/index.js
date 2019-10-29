import React, { Component } from 'react'

import PokeCard from '../../components/pokeCard'
import CurrentPokemon from '../../components/currentPokemon'
import SearchBox from '../../components/searchBox'

import mainStore from '../../stores/mainStore'


import './index.scss'

export default class Dashboard extends Component {
    render () {
        return (
            <div className='dashboard'>
                <div className='dashboard__section dashboard__pokemon-list'>
                    <SearchBox mainStore={mainStore} />
                    <hr />
                    <PokeCard mainStore={mainStore} />
                </div>
                <div className='dashboard__section dashboard__pokemon-viewer'>
                    <CurrentPokemon mainStore={mainStore} />
                </div>
            </div>
        )
    }
}