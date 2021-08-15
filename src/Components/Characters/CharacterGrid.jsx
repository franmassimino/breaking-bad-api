import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? <h1 className='loading'>Loading...</h1> : 
        <section className='cards'>
            {items.map((item, key) => (
                    <CharacterItem item={item} key={item.char_id} />
                )
            )}
        </section>
    )
}

export default CharacterGrid
