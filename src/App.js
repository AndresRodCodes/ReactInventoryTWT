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
    setItems({ items: currentData });
    console.log(items);
  };

  const filterItems = (data) => {
    const filteredItems = [];

    for (const item of data) {

      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredItems.push(item);
    }

    return filteredItems;
  };

  return (
    <div className="container">
      <div className="row">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemData} />
      </div>
      <div className="row">
        <ItemsDisplay items={filterItems(items["items"])} />
      </div>
    </div>
  );
}

export default App;
