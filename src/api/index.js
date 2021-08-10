import axios from "axios";

//const url = "https://school-database-crud.herokuapp.com/items";
const url = "http://localhost:5000/items";

// Import to actions
export const fetchItems = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);
export const updateItem = (id, updatedItem) =>
  axios.patch(`${url}/${id}`, updatedItem);
