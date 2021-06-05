import React, { useState } from "react";
import "./style.css";
import CellComponent from "./cell";

export default function RowComponent({
  data,
  heading,
  footing,
  yellowHeading,
}) {
  const header = heading.map((t) => (
    <th className="tHeader" key={t}>
      {t}
    </th>
  ));
  const yellowHeader = yellowHeading.map((t) => (
    <th class="yellowHeading" key={t}>
      {t}
    </th>
  ));
  const rows = data.map((key, index) => {
    return (
      <tr key={key["#"] + key["Name"]}>
        <td key={index + String(key["#"])}>
          <CellComponent value={key["#"]} size={String(key["#"]).length} />
        </td>
        <td key={index + key["Name"]}>
          <CellComponent
            key={index + key["Name"]}
            value={key["Name"]}
            size={key["Name"].length}
          />
        </td>
        <td key={index + String(key["Rate"])}>
          <CellComponent value={key["Rate"]} size={"Rate".length} />
        </td>
        <td key={index + key["Name"] + String(key["Quantity"])}>
          <CellComponent value={key["Quantity"]} size={"Quantity".length} />
        </td>
        <td key={index + String(key["Basic Cost"])}>
          <CellComponent
            value={key["Basic Cost"]}
            size={"Basic Cost".length}
            disabled={true}
            classy={"disabledInput"}
          />
        </td>
        <td key={index + String(key["Discount (%)"]) + key["Name"]}>
          <CellComponent
            value={key["Discount (%)"]}
            size={"Discount (%)".length}
          />
        </td>
        <td key={index + String(key["Discount Amt"])}>
          <CellComponent
            value={key["Discount Amt"]}
            size={"Discount Amt".length}
            classy={"disabledInput"}
            disabled={true}
          />
        </td>
        <td key={index + String(key["Final Basic Cost"])}>
          <CellComponent
            value={key["Final Basic Cost"]}
            size={"Final Basic Cost".length}
            classy={"disabledInput"}
            disabled={true}
          />
        </td>
        <td key={index + String(key["Taxes (%)"])}>
          <CellComponent value={key["Taxes (%)"]} size={"Taxes (%)".length} />
        </td>
        <td key={index + String(key["Tax Amt"])}>
          <CellComponent
            value={key["Tax Amt"]}
            size={"Total Final basic cost".length}
            classy={"disabledInput"}
            disabled={true}
          />
        </td>
        <td key={index + String(key["Total Cost"])}>
          <CellComponent
            value={key["Total Cost"]}
            size={"Total Cost".length}
            classy={"disabledInput"}
            disabled={true}
          />
        </td>
        <td key={index + String(key["Tools"])}>
          <CellComponent
            value={key["Tools"]}
            size={"Tools".length}
            // classy={"disabledInput"}
            disabled={true}
          />
        </td>
      </tr>
    );
  });

  const footer = footing.map((f) => {
    return (
      <tr className="" key={f[0]}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td key={f[0]}>
          {f[0] ? (
            <CellComponent
              value={f[0]}
              size={"Total Final basic cost".length}
            />
          ) : (
            <></>
          )}
        </td>
        {f[0] ? (
          <CellComponent value={f[1]} size={"Total Cost".length} />
        ) : (
          <input
            disabled
            style={{
              borderWidth: "0px",
            }}
            size={"Total cost".length}
          ></input>
        )}
        <td></td>
      </tr>
    );
  });

  const saveBtn = (
    <tr className="">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button className="addbtn">Add new Item</button>
      </td>
      <td>
        <button className="savebtn">Save</button>
      </td>
      <td></td>
    </tr>
  );

  return (
    <>
      <thead>
        {/* {yellowHeader} */}
        <tr className="table-header">{header}</tr>
      </thead>
      <tbody>
        {data.length ? rows : <>No data</>}
        {footer}
        {saveBtn}
      </tbody>
    </>
  );
}
