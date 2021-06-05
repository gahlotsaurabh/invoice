import React, { useState } from "react";
import SheetComponent from "../components/sheet";
var data = require("../db.json");

export default function SheetContainer() {
  return (
    <>
      <SheetComponent data={data} />
    </>
  );
}
