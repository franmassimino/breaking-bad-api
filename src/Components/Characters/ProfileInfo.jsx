import React from 'react'

const ProfileInfo = ({info, isLoading}) => {
    let char = info[0] 
    return (
        isLoading ? <h1 className='loading'>Loading...</h1> : 
        <div>
            <h1>{char.name}</h1>
        </div>
    )
}

export default ProfileInfo
