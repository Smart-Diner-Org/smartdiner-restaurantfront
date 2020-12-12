import React from "react";

function Orders(props) {
  return (
    <li>
      <label>{props.itemName}</label>
      <label>{props.quantity}</label>
      <label>Rs.{props.discountPrice}</label>
      <label>{props.menuQuantity.quantity_values.quantity} {props.menuQuantity?.measure_values.name}</label>
    </li>
  );
}

export default Orders;
