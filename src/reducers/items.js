import {
  FETCH_ALL,
  CREATE,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../constants/actionTypes";

export default (items = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...items, action.payload];
    case UPDATE_ITEM:
      return items.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case DELETE_ITEM:
      return items.filter((item) => item._id !== action.payload);
    default:
      return items;
  }
};
