import { useState } from "react";
import xlsx from "xlsx";

const ImportData = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const importData = (selectedFile) => {
    if (!selectedFile) return;

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (e) => {
      let data = e.target.result;
      let workbook = xlsx.read(data, { type: "binary" });
      console.log(workbook);
      workbook.SheetNames.forEach((sheet) => {
        let rowObjects = xlsx.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        console.log(rowObjects);
        console.log(JSON.stringify(rowObjects, undefined, 2));
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
