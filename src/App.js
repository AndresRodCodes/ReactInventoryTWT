import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {

  const [filters, setfilters] = useState({});
  const [items, setItems] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setfilters(searchParams);
  };

  const addItemData = (item) => {
    let currentData = items["items"];
    item.id = currentData.length;
    currentData.push(item);
    setItems({ items : currentData });
    console.log(items);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters}/>
      <AddItem addItem={addItemData}/>
      <ItemsDisplay items={items["items"]} />
    </div>
  );
}

export default App;
