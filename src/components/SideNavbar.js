import { Navbar, Nav } from "react-bootstrap";

const SideNavbar = ({ updateSelectedTab, tabOptions }) => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <div className="container w-100">
            <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0 w-100">
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
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNavbar;
