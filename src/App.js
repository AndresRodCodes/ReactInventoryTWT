import "./App.css";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

function App() {
  const tabs = {
    Inventory: "inventory",
    AddItem: "addItem",
    ImportData: "importData",
    ExportData: "exportData",
  };

  const [filters, setfilters] = useState({});
  const [items, setItems] = useState({ items: [] });
  const [tab, setTab] = useState(tabs.Inventory);

  const jsonServerDB = "http://localhost:3001/items";

  useEffect(() => {
    fetch(jsonServerDB)
      .then((response) => response.json())
      .then((data) => setItems({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setfilters(searchParams);
  };

  const updateTab = (selectedTab) => {
    setTab(selectedTab);
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
    let deleteItemConfirm = window.confirm(
      `Are you sure you'd like to delete this item?\nItem name: ${item.name}`
    );
    if (!deleteItemConfirm) {
      return;
    }

    const itemsList = items["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(jsonServerDB + `/${item.id}`, requestOptions).then((response) => {
      if (response.ok) {
        const index = itemsList.indexOf(item);
        itemsList.splice(index, 1);
        setItems({ items: itemsList });
      }
    });
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
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 pt-5 mt-2">
          <Navbar updateSelectedTab={updateTab} tabOptions={tabs} />
        </div>
        <div className="col">
          <div className="row">
            <TopNavbar />
          </div>
          <div className="container mt-3">
            <div className="row">
              {tab === tabs.Inventory ? (
                <SearchBar updateSearchParams={updateFilters} />
              ) : (
                ""
              )}
            </div>
            <div className="row mt-3">
              {tab === tabs.AddItem ? <AddItem addItem={addItemData} /> : ""}
            </div>
            <div className="row">
              {tab === tabs.Inventory ? (
                <ItemsDisplay
                  items={filterItems(items["items"])}
                  deleteItem={deleteItem}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
