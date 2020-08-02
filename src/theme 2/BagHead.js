import React, { Component } from "react"


function BagHead(props) {
    return (
        <header className="bag-header">
                    <div className="left">
                    <button onClick={this.props.closePopup}>x</button>
                    </div>
                    <div className="right">
                    <label >Your PaperBag</label>
                    <img src='./dummpy.jpg' alt="image"/>
                    </div>
                </header>
    )
}

export default BagHead