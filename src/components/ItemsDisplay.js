import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function ItemsDisplay({ items, deleteItem, editItem }) {
  const showItem = (item) => {
    return (
      <tr>
        <th>{item.name}</th>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <FontAwesomeIcon
            style={{ cursor: "pointer", color: "red" }}
            icon={faTrash}
            onClick={() => deleteItem(item)}
          />
        </td>
        <td>
          <FontAwesomeIcon
            style={{ cursor: "pointer", color: "orange" }}
            icon={faPen}
            onClick={() => editItem(item)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
