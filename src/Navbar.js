const Navbar = () => {
  return (
    <nav className="navbar navbar-light container-fluid">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inventory
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Add Item
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Import Data
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
            Export Data
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
