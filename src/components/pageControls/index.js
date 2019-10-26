import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
class PageControls extends Component {
    handlePageChange = async (direction) => { // TODO: Add page checking
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
                <div>{this.props.mainStore.page}</div>
                <div className='page-control__item' onClick={() => {this.handlePageChange('fwd')}}>&gt;</div>
            </div>
        )
    }

}

export default PageControls