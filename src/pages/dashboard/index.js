import React, { Component } from 'react'

import PokeCard from '../../components/pokeCard'
import PageControls from '../../components/pageControls'

import mainStore from '../../stores/mainStore'


import './index.scss'

export default class Dashboard extends Component {
    render () {
        return (
            <div className='dashboard'>
                <PokeCard mainStore={mainStore} />
                <PageControls mainStore={mainStore} />

            </div>
        )
    }
}