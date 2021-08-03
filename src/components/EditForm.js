import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateItem } from "../actions/items";

const EditForm = ({ currentId, setCurrentId }) => {
  const item = useSelector((state) =>
    currentId ? state.items.find((p) => p._id === currentId) : null
  );

  const [itemData, setItemData] = useState({
    name: "",
    price: 0,
    type: "",
    brand: "",
  });

  useEffect(() => {
    if (item) {
      setItemData(item);
    }
  }, []);

  const dispatch = useDispatch();

  function submitEdit() {
    dispatch(updateItem(currentId, itemData));
    cancelEdit();
  }

  function cancelEdit() {
    setCurrentId(null);
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Edit Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name: </label>
          <input
            id="name-field"
            className="form-control"
            type="text"
            value={itemData.name}
            onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="price-field">Price: </label>
          <input
            id="price-field"
            className="form-control"
            type="number"
            value={itemData.price}
            onChange={(e) =>
              setItemData({ ...itemData, price: e.target.value })
            }
          ></input>
        </div>
        <div className="col">
          <label htmlFor="type-field">Type: </label>
          <input
            id="type-field"
            className="form-control"
            type="text"
            value={itemData.type}
            onChange={(e) => setItemData({ ...itemData, type: e.target.value })}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="brand-field">Brand: </label>
          <input
            id="brand-field"
            className="form-control"
            type="text"
            value={itemData.brand}
            onChange={(e) =>
              setItemData({ ...itemData, brand: e.target.value })
            }
          ></input>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3"></div>
        <button
          className="btn btn-primary col-2"
          type="button"
          onClick={submitEdit}
        >
          Confirm
        </button>
        <div className="col-2"></div>
        <button
          className="btn btn-danger col-2"
          type="button"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditForm;
