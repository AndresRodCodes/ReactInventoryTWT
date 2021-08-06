import {
  FETCH_ALL,
  CREATE,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../constants/actionTypes";
import * as api from "../api";

// Item Action Creators
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE_ITEM, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItem = (id, item) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);

    dispatch({ type: UPDATE_ITEM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
