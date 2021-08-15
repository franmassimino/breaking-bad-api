import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import CharacterGrid from "./Characters/CharacterGrid";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState([])
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      console.log(result.data);
      setIsLoading(false)
    }
    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header/>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default HomePage