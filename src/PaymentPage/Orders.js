import React from "react";

function Orders(props) {
  return (
    <li>
      <label>{props.itemName}</label>
      <label>{props.quantity}</label>
      <label>Rs.{props.discountPrice}</label>
      <label>{props.menuQuantity[0].quantity_values.quantity}{props.menuQuantity[0]?.measure_values.name}</label>
    </li>
  );
}

export default Orders;
