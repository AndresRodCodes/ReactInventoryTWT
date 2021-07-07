const TopNavbar = () => {
  return (
    <div className="container border-bottom border-2 text-center pb-2">
      <div className="row d-flex align-items-center">
        <div className="col">
          <h1>School Inventory</h1>
        </div>
        <div className="col"></div>
        <div className="col">
          <button type="buttton" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
