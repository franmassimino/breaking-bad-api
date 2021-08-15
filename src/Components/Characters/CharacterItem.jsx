import React from 'react'

const CharacterItem = ({ item }) => {
    return (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h2>{item.name}</h2>
            <ul>
              <li>
                <strong>Actor:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              {item.birthday !== 'Unknown' ? 
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li> 
              : null
            }
              <li>
                <strong>Status:</strong> {item.status}
              </li>
              <li>
                <strong>Occupation:</strong> {item.occupation[0]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default CharacterItem
