import React from "react";

function QuantityButtons(props) {
  return (
    <div
      className="input-group mb-3"
      style={{
        width: "fit-content",
        border: "1px solid black",
        borderRadius: "23px",
        maxWidth: "112px",
      }}
    >
      <div className="input-group-prepend">
        <button
          className="button-round"
          style={{ borderLeft: "0px" }}
          type="button"
          onClick={props.decreaseQuantity}
        >
          −
        </button>
      </div>
      <input
        type="text"
        className="total-quantity"
        value={props.quantity ? props.quantity : 0}
      />

      <div className="input-group-append">
        <button
          className="button-round"
          style={{ borderRight: "0px" }}
          type="button"
          onClick={props.increaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityButtons;
