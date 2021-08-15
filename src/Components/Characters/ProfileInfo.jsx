import React from 'react'

const ProfileInfo = ({info, isLoading}) => {
    let char = info[0] 
    return (
        isLoading ? <h1 className='loading'>Loading...</h1> : 
        <div className='profile-card'>
            <img className='profile-img' src={char.img} alt={char.name} />
            <h1>{char.name}</h1>
            <p>"{char.nickname}"</p>
            <p>Status: {char.status}</p>
            <p>Occupation: {char.occupation[0]}</p>
        </div>
    )
}

export default ProfileInfo
