import { useState } from "react";
import xlsx from "xlsx";

const ImportData = ({ addImportedItems }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [importedData, setImportedData] = useState([]);

  const showImportedItem = (importedItem) => {
    return (
      <tr>
        <td>{importedItem.name}</td>
        <td>{importedItem.price}</td>
        <td>{importedItem.type}</td>
        <td>{importedItem.brand}</td>
      </tr>
    );
  };

  const onFileSelected = (excelFile) => {
    setSelectedFile(excelFile);
    importData(excelFile);
  };

  // Use xlsx to import excel data as objects
  const importData = (selectedFile) => {
    if (!selectedFile) return;

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (e) => {
      let data = e.target.result;
      let workbook = xlsx.read(data, { type: "binary" });
      // Loop through each row in excel sheet
      workbook.SheetNames.forEach((sheet) => {
        let rowObjects = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
        setImportedData(rowObjects);
      });
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
            onChange={(e) => onFileSelected(e.target.files[0])}
          ></input>
        </div>
        <div className="col-6">
          <button
            className={`btn btn-primary ${!selectedFile ? "disabled" : ""}`}
            type="button"
            onClick={() => addImportedItems(importedData)}
          >
            Import Data to Database
          </button>
        </div>
      </div>
      <div className="row">
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
                </tr>
              </thead>
              <tbody>
                {importedData.length > 0
                  ? importedData.map(showImportedItem)
                  : "Choose a file to show its items"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportData;
