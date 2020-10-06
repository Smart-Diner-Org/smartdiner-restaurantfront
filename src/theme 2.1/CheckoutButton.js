import React from "react"
class CheckoutButton extends React.Component {
    render() {
        return(
            <div>
                <div className="checkout-button">
                   <button onClick={this.props.togglePopup}>Checkout <span className="count">({this.props.total})</span> 
                   <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right arrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </button>

                </div>
            </div>
        )
    }
  }

  export default CheckoutButton;