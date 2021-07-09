import { useState } from "react";

const ImportData = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const importData = (selectedFile) => {
    if (!selectedFile) return;

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (e) => {
      console.log(e.target.result);
    };
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-end">
        <div className="col-6">
          <label htmlFor="fileImport" className="form-label">
            Choose an Excel file to import
          </label>
          <input
            className="form-control"
            type="file"
            id="fileImport"
            accept=".xls, .xlsx"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          ></input>
        </div>
        <div className="col-6">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => importData(selectedFile)}
          >
            Import Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportData;
