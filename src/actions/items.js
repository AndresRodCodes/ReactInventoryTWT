import * as api from "../api";

// Item Action Creators
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.deleteItem(item);

    dispatch({ type: "DELETE_ITEM", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
