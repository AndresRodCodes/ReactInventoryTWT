import axios from "axios";

const url = "http://localhost:5000/items";

export const fetchItems = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
