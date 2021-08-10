import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import ImportData from "./components/ImportData";
import ExportData from "./components/ExportData";
import xlsx from "xlsx";
import { saveAs } from "file-saver";

import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "./actions/items";
import EditForm from "./components/EditForm";

function App() {
  const dispatch = useDispatch();
  const mongoItems = useSelector((state) => state.items);

  const tabs = {
    Inventory: "inventory",
    AddItem: "addItem",
    ImportData: "importData",
    ExportData: "exportData",
  };

  const [currentId, setCurrentId] = useState(null);
  const [filters, setfilters] = useState({});
  const [items, setItems] = useState({ items: [] });
  const [tab, setTab] = useState(tabs.Inventory);

  // On application load
  useEffect(() => {
    dispatch(getItems());
    setItems({ items: mongoItems });
  }, [dispatch, mongoItems]);

  const updateFilters = (searchParams) => {
    setfilters(searchParams);
  };

  const updateTab = (selectedTab) => {
    setTab(selectedTab);
  };

  const addItemData = (item) => {
    // TODO: Add single item to MongoDB
  };

  const addItemsToInventory = (importedItems) => {
    let shouldImportData = window.confirm(
      "Are you sure you'd like to add these items to the database?"
    );
    if (!shouldImportData) return;

    importedItems.forEach((importedItem) => addItemData(importedItem));
  };

  // Exports local item data as and excel file.
  const exportDataAsExcel = () => {
    const EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8";
    const EXCEL_EXTENSION = ".xlsx";

    const worksheet = xlsx.utils.json_to_sheet(items["items"]);
    const workbook = {
      Sheets: {
        items: worksheet,
      },
      SheetNames: ["items"],
    };
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const filename = "Item_Inventory_";

    const excelData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    saveAs(excelData, filename + new Date().getTime() + EXCEL_EXTENSION);
  };

  const clickDeleteItem = (item) => {
    let deleteItemConfirm = window.confirm(
      `Are you sure you'd like to delete this item?\nItem name: ${item.name}`
    );
    if (!deleteItemConfirm) {
      return;
    }

    dispatch(deleteItem(item._id));
  };

  const clickEditItem = (item) => {
    setCurrentId(item._id);
  };

  const filterItems = (data) => {
    const filteredItems = [];

    if (!filters.name && !filters.price && !filters.type && !filters.brand) {
      return data;
    }

    console.log(filters);

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredItems.push(item);
    }
    console.log(filteredItems);

    return filteredItems;
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 pt-5 mt-2">
          <SideNavbar updateSelectedTab={updateTab} tabOptions={tabs} />
        </div>
        <div className="col">
          <div className="row">
            <TopNavbar />
          </div>
          <div className="container-fluid mt-3">
            <div className="row">
              {tab === tabs.Inventory ? (
                <SearchBar updateSearchParams={updateFilters} />
              ) : (
                ""
              )}
            </div>
            <div className="row mt-3">
              {tab === tabs.AddItem ? <AddItem addItem={addItemData} /> : ""}
            </div>
            <div className="row">
              {tab === tabs.Inventory ? (
                <div>
                  {currentId ? (
                    <EditForm
                      currentId={currentId}
                      setCurrentId={setCurrentId}
                    />
                  ) : (
                    ""
                  )}
                  <ItemsDisplay
                    items={filterItems(items["items"])}
                    deleteItem={clickDeleteItem}
                    editItem={clickEditItem}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            {tab === tabs.ImportData ? (
              <ImportData addImportedItems={addItemsToInventory} />
            ) : (
              ""
            )}
            <div>
              {tab === tabs.ExportData ? (
                <ExportData exportData={exportDataAsExcel} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
