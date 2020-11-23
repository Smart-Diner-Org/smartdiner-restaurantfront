import React from "react";

class GetAddress extends React.Component {
  render() {
    return (
      <div>
        <div className="address mb-20 ">
          <div className="row" style={{ marginLeft: "90%" }}>
            {/* <button className="cancel">X</button> */}
          </div>
          <div className="row ">
            <div className="col-6">
              <h4>{this.props.name}</h4>
              <br />
              <label>{this.props.customer_detail.address_one}</label>
              <br />
              <label>{this.props.customer_detail.address_two}</label>
              <br />
            </div>
          </div>
          <div className="row" style={{ marginLeft: "70%" }}>
            <div className="col">
              <button className="edit" onClick={this.props.editbtn}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetAddress;
