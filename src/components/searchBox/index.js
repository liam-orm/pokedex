import React, { Component } from 'react'

import { observer } from 'mobx-react'

import './index.scss'

@observer
class SearchBox extends Component{
    handleInput() {
        let input = document.querySelector('.search-box').value.toUpperCase()

        if (input !== '') {
            this.props.mainStore.pokemon.forEach(item => {
                if (item.name.toUpperCase().indexOf(input) > -1) {
                    item.hide = false
                } else {
                    item.hide = true
                }
            })
        } else {
            this.props.mainStore.pokemon.forEach(item => {
             item.hide = false
            })
        }
    }

    render () {
        return (
            <>
                <input className='search-box' placeholder='Type to search' onChange={() => this.handleInput()} />
            </>
        )
    }
}

export default SearchBox