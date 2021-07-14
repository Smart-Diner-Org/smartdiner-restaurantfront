export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0,
  totaldiscount,

) {
  const total = itemsList.reduce(function (accumulator, currentValue) {
    const valueToBeAdded =
      currentValue.menu.discount > 0
        ? (currentValue.selectedMenuQuantity.price -
          currentValue.selectedMenuQuantity.price *
          (currentValue.menu.discount / 100)) *
        currentValue.selectedMenuQuantity.quantity
        : currentValue.selectedMenuQuantity.price *
        currentValue.selectedMenuQuantity.quantity;
    const newTotal = accumulator + valueToBeAdded;
    return newTotal;
  }, 0);

  // sessionStorage.getItem("totcharge") !== 0 || && Boundary === true
  if (Number(sessionStorage.getItem("allow")) === 1) {
    const totAftDis = total - (total * totaldiscount / 100).toFixed(2);
    const actualdeliverycharge = Number(sessionStorage.getItem("totcharge"))
    const deliveryChargeCGST = (actualdeliverycharge) * (taxPercentage / 2 / 100);
    const deliveryChargeSGST = (actualdeliverycharge) * (taxPercentage / 2 / 100);
    const CGST = ((totAftDis) * (taxPercentage / 2 / 100)) + deliveryChargeCGST;
    const SGST = ((totAftDis) * (taxPercentage / 2 / 100)) + deliveryChargeSGST;
    const totalWithTax = (totAftDis + CGST + SGST + actualdeliverycharge).toFixed(2);
    const discountAmt = (total - totAftDis);

    sessionStorage.setItem("totalWithTax", totalWithTax);
    sessionStorage.setItem("SGST", SGST.toFixed(2));
    sessionStorage.setItem("CGST", CGST.toFixed(2));
    sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
    sessionStorage.setItem("deliveryCharge", actualdeliverycharge.toFixed(2))
    sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
    sessionStorage.setItem("totalMrp", parseFloat(total).toFixed(2));


    return [total, CGST, SGST, totalWithTax, totAftDis, discountAmt, actualdeliverycharge];
  }


  if (Number(sessionStorage.getItem("allow")) === 0) {
    const totAftDis = total - (total * totaldiscount / 100).toFixed(2);
    const deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
    const deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
    const CGST = ((totAftDis) * (taxPercentage / 2 / 100)) + deliveryChargeCGST;
    const SGST = ((totAftDis) * (taxPercentage / 2 / 100)) + deliveryChargeSGST;
    const totalWithTax = (totAftDis + CGST + SGST + deliveryCharge).toFixed(2);
    const discountAmt = (total - totAftDis);

    sessionStorage.setItem("totalWithTax", totalWithTax);
    sessionStorage.setItem("SGST", SGST.toFixed(2));
    sessionStorage.setItem("CGST", CGST.toFixed(2));
    sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
    sessionStorage.setItem("deliveryCharge", deliveryCharge.toFixed(2))
    sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
    sessionStorage.setItem("totalMrp", parseFloat(total).toFixed(2));


    return [total, CGST, SGST, totalWithTax, totAftDis, discountAmt, deliveryCharge];
  }





}

