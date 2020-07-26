import React from "react"
import BagImage from "./assets/images/bag.png"
import Logo from "./assets/images/logo.png"


function HeadComponent(props) {
    return (
    

    <header class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="index.html">
                            <img src={Logo} alt="Logo"/>
                        </a> 

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="bar-icon"></span>
                            <span class="bar-icon"></span>
                            <span class="bar-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul id="nav" class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a data-scroll-nav="0" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a data-scroll-nav="0" href="#location">Location</a>
                                </li>
                                <li class="nav-item">
                                    <a data-scroll-nav="0" href="#product">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a data-scroll-nav="0" href="#contact">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a data-scroll-nav="0" href="#">
                                        <img src={BagImage} class="img-responsive cart" alt="Cart"/>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </nav> 
                </div>
            </div> 
        </div> 
    </header>

    
    )
}

export default HeadComponent