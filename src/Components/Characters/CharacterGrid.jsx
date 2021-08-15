import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    return (
        isLoading ? <h1 className='loading'>Loading...</h1> : 
        <section className='cards'>
            {items.length > 0 ? 
                items.map((item, key) => (
                        <CharacterItem item={item} key={item.char_id} />
                    )
                ) : 
                <h2 className='error-msg'>No characters found :(</h2>
            }
        </section>
    )
}

export default CharacterGrid
