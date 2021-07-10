import { useState } from "react";
import xlsx from "xlsx";

const ImportData = ({ items }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [importedData, setImportedData] = useState([{}]);

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
    console.log(importedData);
  };

  const importData = (selectedFile) => {
    if (!selectedFile) return;

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (e) => {
      let data = e.target.result;
      let workbook = xlsx.read(data, { type: "binary" });
      console.log(workbook);
      // Loop through each row in excel sheet
      workbook.SheetNames.forEach((sheet) => {
        let rowObjects = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
        setImportedData(rowObjects);
        console.log(JSON.stringify(importedData, undefined, 2));
      });
    };
  };

  const importDataToDatabase = () => {
    let shouldImportData = window.confirm(
      "Are you sure you'd like to add these items to the database?"
    );

    if (shouldImportData) {
      let allItems = items["items"];
      console.log(allItems);
      importedData.forEach((item) => allItems.push(item));
      console.log(allItems);
    }
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
            onClick={() => importDataToDatabase()}
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
              <tbody>{importedData.map(showImportedItem)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportData;
