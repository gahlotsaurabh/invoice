import React from "react";
import "./style.css";

import RowComponent from "./row";

export default function SheetComponent({
  data,
  onInputChange,
  saveData,
  addNew,
  deleteRow,
  footing,
}) {
  return (
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="mx-auto table-pos">
          <RowComponent
            data={data}
            saveData={saveData}
            onInputChange={onInputChange}
            addNew={addNew}
            deleteRow={deleteRow}
            footing={footing}
          />
        </div>
      </div>
    </div>
  );
}
