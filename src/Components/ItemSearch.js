import React from 'react';

export default function ItemSearch(props){

    const {
        search,
        searchInputChange
    } = props

    return(
        <label>
            <input 
                value={search}
                onChange={searchInputChange}
                name='search'
                type='text'
                placeholder='Item search...'
            />
        </label>
    )
}