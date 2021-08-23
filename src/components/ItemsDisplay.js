function ItemsDisplay({ items, deleteItem, editItem }) {
  const showItem = (item) => {
    return (
      <tr>
        <th>{item.name}</th>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteItem(item)}>
            Delete
          </button>
        </td>
        <td>
          <button className="btn btn-warning" onClick={() => editItem(item)}>
            Edit
          </button>
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
