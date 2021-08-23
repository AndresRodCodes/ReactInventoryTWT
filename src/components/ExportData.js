const ExportData = ({ exportData, itemLength }) => {
  return (
    <div>
      <p>{"Total number of items: " + itemLength}</p>
      <button className="btn btn-primary" onClick={() => exportData()}>
        Export Data
      </button>
    </div>
  );
};

export default ExportData;
