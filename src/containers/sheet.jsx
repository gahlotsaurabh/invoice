import React, { useState } from "react";
import SheetComponent from "../components/sheet";
import {
  calBasicCost,
  calDiscountAmount,
  calFinalBC,
  calTaxAmt,
  calTotalCost,
  calTotalBasicCost,
} from "../utils/index";
const persistantData = JSON.parse(localStorage.getItem("data")) || [
  {
    "#": newArr.length,
    Name: "",
    Rate: 0,
    Quantity: 0,
    "Basic Cost": 0,
    "Discount (%)": 0,
    "Discount Amt": 0,
    "Final Basic Cost": 0,
    "Taxes (%)": 0,
    "Tax Amt": 0,
    "Total Cost": 0,
    Tools: "Delete",
  },
];

export default function SheetContainer() {
  const [data, setData] = useState(persistantData);

  const onInputChange = (e) => {
    e.preventDefault();
    var reg = new RegExp("^[0-9]+$");
    if (e.target.dataset.type === "num" && !reg.test(e.target.value)) return;
    let newArr = [...data];
    newArr[parseInt(e.target.dataset.rowIndex)][e.target.dataset.colName] =
      e.target.value;
    setData(newArr);
  };

  const footing = [
    ["", ""],
    ["Total Basic Cost", calTotalBasicCost(data, "Basic Cost")],
    ["Total Discount", calTotalBasicCost(data, "Discount (%)")],
    ["Total Final basic cost", calTotalBasicCost(data, "Final Basic Cost")],
    ["Total Tax", calTotalBasicCost(data, "Tax Amt")],
    ["Final Price", calTotalBasicCost(data, "Total Cost")],
    ["", ""],
  ];

  const saveData = (e) => {
    e.preventDefault();
    let newArr = [...data];
    newArr.forEach((i) => {
      i["Basic Cost"] = calBasicCost(
        parseInt(i["Rate"]),
        parseInt(i["Quantity"])
      );
      i["Discount Amt"] = calDiscountAmount(
        calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
        i["Discount (%)"]
      );
      i["Final Basic Cost"] = calFinalBC(
        calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
        calDiscountAmount(
          calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
          i["Discount (%)"]
        )
      );
      i["Tax Amt"] = calTaxAmt(
        calFinalBC(
          calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
          calDiscountAmount(
            calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
            i["Discount (%)"]
          )
        )
      );
      i["Total Cost"] = calTotalCost(
        calFinalBC(
          calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
          calDiscountAmount(
            calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
            i["Discount (%)"]
          )
        ),
        calTaxAmt(
          calFinalBC(
            calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
            calDiscountAmount(
              calBasicCost(parseInt(i["Rate"]), parseInt(i["Quantity"])),
              i["Discount (%)"]
            )
          )
        )
      );
    });
    localStorage.setItem("data", JSON.stringify(newArr));
    setData([
      {
        "#": 0,
        Name: "",
        Rate: 0,
        Quantity: 0,
        "Basic Cost": 0,
        "Discount (%)": 0,
        "Discount Amt": 0,
        "Final Basic Cost": 0,
        "Taxes (%)": 0,
        "Tax Amt": 0,
        "Total Cost": 0,
        Tools: "Delete",
      },
    ]);
  };

  const deleteRow = (e) => {
    let deleted = [...data];
    deleted = deleted.filter(
      (i) => i["#"] !== parseInt(e.target.dataset.rowId)
    );
    setData(deleted);
    localStorage.setItem("data", JSON.stringify(deleted));
  };

  const addNew = (e) => {
    let newArr = [...data];
    let obj = {
      "#": newArr.length,
      Name: "",
      Rate: 0,
      Quantity: 0,
      "Basic Cost": 0,
      "Discount (%)": 0,
      "Discount Amt": 0,
      "Final Basic Cost": 0,
      "Taxes (%)": 0,
      "Tax Amt": 0,
      "Total Cost": 0,
      Tools: "Delete",
    };
    newArr.push(obj);
    setData(newArr);
  };

  return (
    <>
      <SheetComponent
        saveData={saveData}
        data={data}
        onInputChange={onInputChange}
        addNew={addNew}
        deleteRow={deleteRow}
        footing={footing}
      />
    </>
  );
}
