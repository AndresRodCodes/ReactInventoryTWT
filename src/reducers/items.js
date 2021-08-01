export default (items = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...items, action.payload];
    case "DELETE_ITEM":
      return items.filter((item) => item._id !== action.payload);
    default:
      return items;
  }
};
