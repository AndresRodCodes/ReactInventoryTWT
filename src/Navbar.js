const Navbar = ({ updateSelectedTab, tabOptions }) => {
  return (
    <nav className="navbar navbar-light">
      <ul className="nav flex-column w-100">
        <li className="nav-item">
          <button
            type="button"
            className="w-100 btn btn-lg"
            onClick={() => updateSelectedTab(tabOptions.Inventory)}
          >
            Inventory
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="w-100 btn btn-lg"
            onClick={() => updateSelectedTab(tabOptions.AddItem)}
          >
            Add Item
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="w-100 btn btn-lg"
            onClick={() => updateSelectedTab(tabOptions.ImportData)}
          >
            Import Data
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="w-100 btn btn-lg"
            onClick={() => updateSelectedTab(tabOptions.ExportData)}
          >
            Export Data
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
