import React from "react";
import "./style.css";
import {
  calBasicCost,
  calDiscountAmount,
  calFinalBC,
  calTaxAmt,
  calTotalCost,
} from "../utils/index";

export default function RowComponent({
  data,
  onInputChange,
  saveData,
  addNew,
  deleteRow,
  footing,
}) {
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

  const header = heading.map((t, index) => (
    <th className="tHeader" key={index}>
      {t}
    </th>
  ));
  const yellowHeader = yellowHeading.map((t, index) => (
    <th className="yellowHeading" key={index}>
      {t}
    </th>
  ));
  const rows = data.map((key, index) => {
    return (
      <tr key={index + "#"}>
        <td>
          <input value={key["#"]} size={String(key["#"]).length} />
        </td>
        <td key={index + "Name"}>
          <input
            data-row-id={key["#"]}
            data-row-index={index}
            data-col-name={"Name"}
            value={key["Name"]}
            size={10}
            onChange={onInputChange}
          />
        </td>
        <td key={index + "Rate"}>
          <input
            data-row-id={key["#"]}
            data-row-index={index}
            data-col-name={"Rate"}
            data-type={"num"}
            value={key["Rate"]}
            size={"Rate".length}
            onChange={onInputChange}
          />
        </td>
        <td key={index + "Quantity"}>
          <input
            data-row-id={key["#"]}
            data-row-index={index}
            data-col-name={"Quantity"}
            value={key["Quantity"]}
            size={"Quantity".length}
            onChange={onInputChange}
          />
        </td>
        <td key={index + "Basic Cost"}>
          <input
            value={calBasicCost(
              parseInt(key["Rate"]),
              parseInt(key["Quantity"])
            )}
            size={"Basic Cost".length}
            readOnly
            className="disabledInput"
          />
        </td>
        <td key={index + "Discount (%)"}>
          <input
            data-row-id={key["#"]}
            data-row-index={index}
            data-col-name={"Discount (%)"}
            value={key["Discount (%)"]}
            size={"Discount (%)".length}
            onChange={onInputChange}
          />
        </td>
        <td key={index + "Discount Amt"}>
          <input
            value={calDiscountAmount(
              calBasicCost(parseInt(key["Rate"]), parseInt(key["Quantity"])),
              key["Discount (%)"]
            )}
            size={"Discount Amt".length}
            className="disabledInput"
            readOnly
          />
        </td>
        <td key={index + "Final Basic Cost"}>
          <input
            value={calFinalBC(
              calBasicCost(parseInt(key["Rate"]), parseInt(key["Quantity"])),
              calDiscountAmount(
                calBasicCost(parseInt(key["Rate"]), parseInt(key["Quantity"])),
                key["Discount (%)"]
              )
            )}
            size={"Final Basic Cost".length}
            className="disabledInput"
            readOnly
          />
        </td>
        <td key={index + "Taxes (%)"}>
          <input
            data-row-id={key["#"]}
            data-row-index={index}
            data-col-name={"Taxes (%)"}
            value={key["Taxes (%)"]}
            size={"Taxes (%)".length}
            onChange={onInputChange}
          />
        </td>
        <td key={index + "Tax Amt"}>
          <input
            value={calTaxAmt(
              calFinalBC(
                calBasicCost(parseInt(key["Rate"]), parseInt(key["Quantity"])),
                calDiscountAmount(
                  calBasicCost(
                    parseInt(key["Rate"]),
                    parseInt(key["Quantity"])
                  ),
                  key["Discount (%)"]
                )
              )
            )}
            size={"Total Final basic cost".length}
            className="disabledInput"
            readOnly
          />
        </td>
        <td key={index + "Total Cost"}>
          <input
            value={calTotalCost(
              calFinalBC(
                calBasicCost(parseInt(key["Rate"]), parseInt(key["Quantity"])),
                calDiscountAmount(
                  calBasicCost(
                    parseInt(key["Rate"]),
                    parseInt(key["Quantity"])
                  ),
                  key["Discount (%)"]
                )
              ),
              calTaxAmt(
                calFinalBC(
                  calBasicCost(
                    parseInt(key["Rate"]),
                    parseInt(key["Quantity"])
                  ),
                  calDiscountAmount(
                    calBasicCost(
                      parseInt(key["Rate"]),
                      parseInt(key["Quantity"])
                    ),
                    key["Discount (%)"]
                  )
                )
              )
            )}
            size={"Total Cost".length}
            className="disabledInput"
            readOnly
          />
        </td>
        <td key={index + String(key["Tools"])}>
          <input
            onClick={deleteRow}
            data-row-id={key["#"]}
            readOnly
            value={key["Tools"]}
            size={"Tools".length}
          />
        </td>
      </tr>
    );
  });

  const footer = footing.map((f, index) => {
    return (
      <tr className="" key={index}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td key={index}>
          {f[0] ? (
            <input
              className="tHeader "
              value={f[0]}
              readOnly
              size={"Total Final basic cost".length}
            />
          ) : (
            <></>
          )}
        </td>
        {f[0] ? (
          <td>
            <input
              className="disabledInput"
              value={f[1]}
              size={"Total Cost".length}
              readOnly
            />
          </td>
        ) : (
          <td>
            <input
              // disabled
              readOnly
              style={{
                borderWidth: "0px",
              }}
              size={"Total cost".length}
            />
          </td>
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
        <button onClick={addNew} className="addbtn">
          Add new Item
        </button>
      </td>
      <td>
        <button onClick={saveData} className="savebtn">
          Save
        </button>
      </td>
      <td></td>
    </tr>
  );

  return (
    <>
      <thead>
        {yellowHeader}
        <tr className="table-header">{header}</tr>
      </thead>
      <tbody>
        {data.length ? rows : <></>}
        {footer}
        {saveBtn}
      </tbody>
    </>
  );
}
