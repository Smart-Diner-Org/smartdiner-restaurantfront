import React from "react";

class GetAddress extends React.Component {
  render() {
    return (
      <div>
        <div className="address mb-20 ">
          <div className="col">
            <h4>{this.props.name}</h4>
            <br />
            <label>{this.props.customer_detail.address_one}</label>
            <br />
            <label>{this.props.customer_detail.address_two}</label>
            <br />
          </div>
          <div className="row ">
            <button className="edit ml-auto" onClick={this.props.editbtn}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetAddress;
