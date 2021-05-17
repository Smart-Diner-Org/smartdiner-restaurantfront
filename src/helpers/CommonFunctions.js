export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0,
  totaldiscount
  
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
  const CGST = total * (taxPercentage / 2 / 100);
  const SGST = total * (taxPercentage / 2 / 100);
  const totAftDis = total - (total * totaldiscount / 100).toFixed(2);
  const totalWithTax = (totAftDis + CGST + SGST + deliveryCharge);
  const discountAmt=total-totAftDis;

  sessionStorage.setItem("totalWithTax", totalWithTax);
  sessionStorage.setItem("SGST", SGST.toFixed(2));
  sessionStorage.setItem("CGST", CGST.toFixed(2));
  sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
  sessionStorage.setItem("deliveryCharge", deliveryCharge);
  sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
 
  
  return [total, CGST, SGST, totalWithTax, totAftDis,discountAmt];
}
