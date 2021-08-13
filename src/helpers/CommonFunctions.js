export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0,
  totaldiscount
  
) {
  var totAftDis,deliveryChargeCGST,deliveryChargeSGST,CGST,SGST,totalWithTax,discountAmt,a
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
let sortedamt = totalorderamt.sort((a, b) => b-a);
let sortedisc = discount.sort((a, b) => b-a);

for(var i=0;i<sortedamt.length;i++){
  if(total>=sortedamt[i]&&sortedamt[i]!=0){
    console.log(sortedamt[i])
    totAftDis = total - (total * sortedisc[i] / 100);
    deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
    deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
    CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
    SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
    totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
    discountAmt = (total - totAftDis);
    a=0;
    break;
  }
}

if(a!=0){
  console.log("below 100")
  totAftDis=0;
  deliveryChargeCGST = (deliveryCharge) * (taxPercentage / 2 / 100);
  deliveryChargeSGST = (deliveryCharge) * (taxPercentage / 2 / 100);
  CGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeCGST;
  SGST = ((totAftDis) * (taxPercentage / 2 / 100))+deliveryChargeSGST;
  totalWithTax = totAftDis + CGST + SGST + deliveryCharge;
  discountAmt = (total - totAftDis);
}




  sessionStorage.setItem("totalMrp", parseFloat(total).toFixed(2));
  sessionStorage.setItem("totalWithTax", totalWithTax.toFixed(2));
  sessionStorage.setItem("deliveryCharge", deliveryCharge.toFixed(2));
  sessionStorage.setItem("SGST", SGST.toFixed(2));
  sessionStorage.setItem("CGST", CGST.toFixed(2));
  sessionStorage.setItem("taxPercentageHalfed", (taxPercentage / 2).toFixed(2));
  sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
  
 
  return [total, CGST, SGST, totalWithTax, totAftDis,discountAmt,deliveryCharge];
}

