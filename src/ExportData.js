const ExportData = ({ exportData }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => exportData()}>
        Export Data
      </button>
    </div>
  );
};

export default ExportData;
