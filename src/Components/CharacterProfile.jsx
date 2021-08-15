import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import ProfileInfo from "./Characters/ProfileInfo";
import { useParams } from 'react-router-dom'

const CharacterProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState('')

  let {id} = useParams()
  
  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`)
      setInfo(result.data)
      console.log(result.data);
      setIsLoading(false)
    }
    fetchCharacter()
  }, [id])


  return (
    <div className="container">
      <Header/>
      <ProfileInfo info={info} isLoading={isLoading} />
    </div>
  );
}

export default CharacterProfile