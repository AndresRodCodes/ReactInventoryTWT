const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <ul className="nav flex-column w-100">
        <li className="nav-item">
          <button type="button" className="w-100 btn btn-lg">
            Inventory
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="w-100 btn btn-lg">
            Add Item
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="w-100 btn btn-lg">
            Import Data
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="w-100 btn btn-lg">
            Export Data
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
