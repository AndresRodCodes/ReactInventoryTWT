import "./App.css";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setfilters] = useState({});
  const [items, setItems] = useState({ items: [] });
  const jsonServerDB = "http://localhost:3000/items";

  useEffect(() => {
    fetch(jsonServerDB)
      .then((response) => response.json())
      .then((data) => 
        setItems({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setfilters(searchParams);
  };

  const addItemData = (item) => {
    let currentData = items["items"];

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch(jsonServerDB, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        currentData.push(data);
        setItems({ items: currentData });
        console.log(currentData);
      });
  };

  const deleteItem = (item) => {
    const itemsList = items["items"];
    const requestOptions = {
      method : "DELETE"
    };
    fetch(jsonServerDB + `/${item.id}`, requestOptions).then((response) => {
      if (response.ok) {
        const index = itemsList.indexOf(item);
        itemsList.splice(index, 1);
        setItems({ items: itemsList });
      }
    })
  };

  const filterItems = (data) => {
    const filteredItems = [];

    if (!filters.name) {
      return data;
    }

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
        <ItemsDisplay items={filterItems(items["items"])} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
