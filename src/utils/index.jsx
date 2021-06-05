const calBasicCost = (Rate, Quantity) => {
  return Rate * Quantity;
};

const calDiscountAmount = (BC, dicount) => {
  return (BC * dicount) / 100;
};

const calFinalBC = (BC, dicount) => {
  return BC - dicount;
};

const calTaxAmt = (FC) => {
  return (FC * 10) / 100;
};

const calTotalCost = (FC, TA) => {
  return FC + TA;
};

const calTotalBasicCost = (data, field) => {
  let total = 0;
  data.forEach(function (arrayItem) {
    total = total + parseInt(arrayItem[field]);
  });
  return total;
};

export {
  calBasicCost,
  calDiscountAmount,
  calFinalBC,
  calTaxAmt,
  calTotalCost,
  calTotalBasicCost,
};
