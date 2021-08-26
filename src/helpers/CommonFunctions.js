export default function calculateTotalPrice(
  itemsList,
  taxPercentage = 0,
  deliveryCharge = 0,
  totaldiscount,

) {
  
  var total,totAftDis,deliveryCharge,deliveryChargeCGST,deliveryChargeSGST,CGST,SGST,totalWithTax,discountAmt 
  var discountval,flag,Gst
   total = itemsList.reduce(function (accumulator, currentValue) {
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

 if(totaldiscount!=null){
var string = totaldiscount;
var separateNum = string.match(/\d+/g);
var convToNum = separateNum
var result = convToNum.map(function (x) { 
  return parseInt(x, 10); 
});

let totalorderamt=result.filter((a,i)=>i%2===0);
let discount=result.filter((a,i)=>i%2===1);
let sortedamt = totalorderamt.sort((a, b) => b-a);
console.log(sortedamt)
let sortedisc = discount.sort((a, b) => b-a);
console.log(sortedisc)

for(var i=0;i<sortedamt.length;i++){
  if(total>=sortedamt[i]!=0){
    
    discountval=sortedisc[i];
    console.log("**************",discountval)
    flag=0;
    
    break;
  }
}
if(flag!=0){ 
 discountval=0;
}
 }
else{  
  totAftDis=0;
 }
 
  if (Number(sessionStorage.getItem("DeliveryStatus")) === 1 && deliveryCharge !== null) {


   if(totaldiscount!=null){totAftDis = total - (total * discountval / 100).toFixed(2);
    console.log("totAftDis",totAftDis)}
   else{totAftDis = total - (total * 0 / 100).toFixed(2);}
    
     deliveryCharge = Number(sessionStorage.getItem("totaldeliverycharge"));
     deliveryChargeCGST = 0*(taxPercentage / 2 / 100);
     deliveryChargeSGST = 0*(taxPercentage / 2 / 100);
     CGST = ((totAftDis+deliveryCharge) * (taxPercentage / 2 / 100)) + deliveryChargeCGST;
     SGST = ((totAftDis+deliveryCharge) * (taxPercentage / 2 / 100)) + deliveryChargeSGST;
     Gst=CGST;
     
     totalWithTax = (totAftDis +  deliveryCharge + Gst*2).toFixed(2);
     discountAmt = (total - totAftDis);

    sessionStorage.setItem("totalWithTax", totalWithTax);
    sessionStorage.setItem("SGST", SGST.toFixed(2));
    sessionStorage.setItem("CGST", CGST.toFixed(2));
    sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
    sessionStorage.setItem("deliveryCharge", deliveryCharge.toFixed(2));
    sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
    sessionStorage.setItem("totalMrp", parseFloat(total).toFixed(2));


    return [total, CGST, SGST, totalWithTax, totAftDis, discountAmt, deliveryCharge];
  }


if(deliveryCharge === null){
   
    if(totaldiscount!=null){totAftDis = total - (total * discountval / 100).toFixed(2);}
    else {totAftDis = total - (total * 0 / 100).toFixed(2);
    }
     deliveryCharge = 0;
     deliveryChargeCGST = 0*(taxPercentage / 2 / 100);
     deliveryChargeSGST = 0*(taxPercentage / 2 / 100);
     CGST = ((totAftDis+deliveryCharge) * (taxPercentage / 2 / 100)) + deliveryChargeCGST;
     SGST = ((totAftDis+deliveryCharge) * (taxPercentage / 2 / 100)) + deliveryChargeSGST;
     Gst=CGST;
     
     totalWithTax = (totAftDis + Gst*2).toFixed(2);
          
     discountAmt = (total - totAftDis);

    sessionStorage.setItem("totalWithTax", totalWithTax);
    sessionStorage.setItem("SGST", SGST.toFixed(2));
    sessionStorage.setItem("CGST", CGST.toFixed(2));
    sessionStorage.setItem("taxPercentageHalfed", taxPercentage / 2);
    sessionStorage.setItem("deliveryCharge", deliveryCharge.toFixed(2));
    sessionStorage.setItem("discountAmt", discountAmt.toFixed(2));
    sessionStorage.setItem("totalMrp", parseFloat(total).toFixed(2));


    return [total, CGST, SGST, totalWithTax, totAftDis, discountAmt, deliveryCharge];
}


}
