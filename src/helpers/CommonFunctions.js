export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0
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
  const totalWithTax = (total + CGST + SGST + deliveryCharge).toFixed(2);

  sessionStorage.setItem("totalWithTax", totalWithTax);
  sessionStorage.setItem("SGST", SGST.toFixed(2));
  sessionStorage.setItem("CGST", CGST.toFixed(2));
  sessionStorage.setItem("deliveryCharge", deliveryCharge);

  return [total, CGST, SGST, totalWithTax];
}
