import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {

  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div className="App">
      <SearchBar callback={updateData}/>
      <p>Name: {"name" in data ? data["name"] : "No data to show"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No data to show"}</p>
      <p>Type: {"type" in data ? data["type"] : "No data to show"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No data to show"}</p>
    </div>
  );
}

export default App;
