export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0,
  totaldiscount
  
) {
  var totAftDis,deliveryChargeCGST,deliveryChargeSGST,CGST,SGST,totalWithTax,discountAmt
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
  
  
var string = totaldiscount;
var matches = string.match(/\d+/g);
var a = matches
var result = a.map(function (x) { 
  return parseInt(x, 10); 
});
var arr = result;
let totalorderamt=arr.filter((a,i)=>i%2===0);
let discount=arr.filter((a,i)=>i%2===1);

for(var i=0;i<totalorderamt.length;i++)
{
 if(total>=totalorderamt[0]&&total<=totalorderamt[2])
 {
   totAftDis = total - (total * discount[0] / 100);
   deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
   SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
   totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
   discountAmt = (total - totAftDis);
   break;
 }
 else if(total>=totalorderamt[2])
 {
   totAftDis = total - (total * discount[2] / 100);
   deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
   SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
   totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
   discountAmt = (total - totAftDis);
   break;
 }
 else if(total===0) 
 {
  totAftDis = total - (total * discount[1] / 100);
   deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
   SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
   totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
   discountAmt = (total - totAftDis);
  break;
 }
 else if(total<=totalorderamt[0])
 {
   totAftDis = 0;
   deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
   CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
   SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
   totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
   discountAmt = (total - totAftDis);
  break;
 }
 else{}
}

  sessionStorage.setItem("totalMrp", parseFloat(total));
  sessionStorage.setItem("totalWithTax", totalWithTax);
  sessionStorage.setItem("deliveryCharge", deliveryCharge);
  sessionStorage.setItem("SGST", SGST);
  sessionStorage.setItem("CGST", CGST);
  sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
  sessionStorage.setItem("discountAmt", discountAmt);
  
 
  return [total, CGST, SGST, totalWithTax, totAftDis,discountAmt,deliveryCharge];
}

