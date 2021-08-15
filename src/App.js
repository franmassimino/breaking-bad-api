import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";
import Header from "./Components/Header";
import CharacterGrid from "./Components/Characters/CharacterGrid";

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters`)
    setItems(result.data)
    console.log(result.data);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchItems()
  }, [])


  return (
    <div className="container">
      <Header/>
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
