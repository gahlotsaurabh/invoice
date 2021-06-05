import React, { useState } from "react";

export default function CellComponent({ value, size, disabled, classy }) {
  return (
    <>
      <input value={value} size={size} disabled={disabled} className={classy} />
    </>
  );
}
