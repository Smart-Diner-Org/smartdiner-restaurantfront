import React from "react";

function Orders(props) {
  return (
    <li className="row d-flex flex-nowrap">
      <label className="col-6 text-left">{props.itemName}</label>
      <label className="col-1">{props.quantity}</label>
      <label className="col-2">Rs.{props.price}</label>
      <label className="col-3 text-right">
        {props.menuQuantity.quantity_values.quantity}{" "}
        {props.menuQuantity?.measure_values.name}
      </label>
    </li>
  );
}

export default Orders;
