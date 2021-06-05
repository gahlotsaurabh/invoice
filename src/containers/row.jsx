import React, { useState } from "react";
import RowComponent from "../components/row";
// var data = require("../db.json");

export default function RowContainer({ data }) {
  const heading = [
    "#",
    "Name",
    "Rate",
    "Quantity",
    "Basic Cost",
    "Discount (%)",
    "Discount Amt",
    "Final Basic Cost",
    "Taxes (%)",
    "Tax Amt",
    "Total Cost",
    "Tools",
  ];

  const footing = [
    ["", ""],
    ["Total Basic Cost", 150],
    ["Total Discount", 7],
    ["Total Final basic cost", 143],
    ["Total Tax", 14.3],
    ["Final Price", 157.3],
    ["", ""],
  ];

  const yellowHeading = [
    "",
    "",
    "",
    "",
    "rate*quantity",
    "",
    "(basiccost*discount)/100",
    "basiccost-discount",
    "",
    "(finalcost*10)/100",
    "FinalBasicCost+TaxAmout]",
    "",
  ];

  return (
    <>
      <RowComponent
        data={data}
        heading={heading}
        footing={footing}
        yellowHeading={yellowHeading}
      />
    </>
  );
}
