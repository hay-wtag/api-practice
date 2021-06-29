import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid"
import Header from "./components/ui/Header";
import Search from "./components/ui/Search"

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setIsLoading(false);
      setItems(result.data);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid isloading={isLoading} items={items}/>
    </div>
  );
}

export default App;
