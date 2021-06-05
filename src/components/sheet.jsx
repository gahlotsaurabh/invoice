import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

import RowComponent from "./row";
import RowContainer from "../containers/row";

export default function SheetComponent({ data }) {
  //   const rows = Object.keys(data).map(function (key, index) {
  //     data[key];
  //   });
  return (
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="mx-auto table-pos">
          {/* <RowComponent data={data} /> */}
          <RowContainer data={data} />
        </div>
      </div>
      {/* <button className="float-right">Save</button> */}
    </div>
  );
}
