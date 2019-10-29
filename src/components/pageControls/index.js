import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
/*
    This component is now depreciated, as I have now opted to grab all pokemon, instead of grabbing in chunks.
*/
class PageControls extends Component {
    handlePageChange = async (direction) => {
        if (direction === 'fwd') {
            this.props.mainStore.page++
        } else if (direction === 'bck') {
            this.props.mainStore.page--
        }

        await this.props.mainStore.requestList()
    }

    render() {
        if (!this.props.mainStore) return null
        return (
            <div className='page-control'>
                <div className='page-control__item' onClick={() => {this.handlePageChange('bck')}}>&lt;</div>
                <div>{this.props.mainStore.page} / {this.props.mainStore.pokemonPageCount}</div>
                <div className='page-control__item' onClick={() => {this.handlePageChange('fwd')}}>&gt;</div>
            </div>
        )
    }

}

export default PageControls