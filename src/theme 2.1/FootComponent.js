import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}



function FootComponent(props) {
  const [height, width] = useWindowSize();
  let isMobile = Boolean(width <= 768);
  var count = 0
  var contactNumber = props.contact_number.split(",")
  return (
    <div>
      <section id="footer" class="footer-area mt-50">
        <div class="container">
          <div class="footer-copyright pt-15 pb-15">
            <div class="row">
              <div class="col-lg-8">
                <div class="contact-info pt-25">
                  <h4 class="info-title">Contact Info</h4>
                  <ul>
                    <li>
                      <div class="single-info mt-30">
                        <div class="info-icon">
                          <a
                            href={`tel:+91${props.contact_number}`}
                            target="blank"
                          >
                            <i
                              rel="preload"
                              class="lni-phone-handset mr-10"
                            ></i>
                          </a>
                          {/* <a href={`https://api.whatsapp.com/send?phone=91${props.contact_number}`} target="blank">
                                            <i rel="preload" class="lni lni-whatsapp "></i></a> */}
                        </div>
                        <div class="info-content">
                          <p>
                            {contactNumber ?
                              <>
                                {contactNumber.map(function (value, index) {
                                  count = count + 1
                                  return <>
                                    {
                                      value.length <= 10 ?
                                        <><a
                                          onClick={() =>
                                            ReactGA.event({
                                              category: "Home Page Footer",
                                              action: `Clicked Mobile Number Link`,
                                              label: `Opened contact App to make call`,
                                            })
                                          }
                                          href={`tel:+91${value}`}
                                          target="blank"
                                        >
                                          +91 {value}

                                        </a></>
                                        :
                                        <a
                                          onClick={() =>
                                            ReactGA.event({
                                              category: "Home Page Footer",
                                              action: `Clicked Mobile Number Link`,
                                              label: `Opened contact App to make call`,
                                            })
                                          }
                                          href={`tel:${value}`}
                                          target="blank"
                                        >
                                          {value}

                                        </a>
                                    }
                                    {count !== contactNumber.length ?
                                      <span style={{ color: 'white' }}>{','}&emsp;</span>
                                      :
                                      <></>
                                    }
                                  </>;
                                })}
                              </>

                              : <></>
                            }
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="single-info mt-30">
                        <div class="info-icon">
                          {/*<i rel="preload" class="lni-phone-handset mr-10"></i>*/}
                          <a
                            href={`https://api.whatsapp.com/send?phone=91${props.contact_number}`}
                            target="blank"
                          >
                            <i rel="preload" class="lni lni-whatsapp "></i>
                          </a>
                        </div>
                        <div class="info-content">
                          <p>
                            <a
                              href={`https://api.whatsapp.com/send?phone=91${contactNumber[0]}`}
                              target="blank"
                              onClick={() =>
                                ReactGA.event({
                                  category: "Home Page Footer",
                                  action: `Clicked Whatsapp Number Link`,
                                  label: `Opened Whats App to make chat`,
                                })
                              }
                            >
                              +91 {contactNumber[0]}
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="single-info mt-30">
                        <div class="info-icon">
                          <a href={`mailto:${props.email}`} target="blank">
                            <i class="lni-envelope"></i>
                          </a>
                        </div>
                        <div class="info-content">
                          <p>
                            <a
                              onClick={() =>
                                ReactGA.event({
                                  category: "Home Page Footer",
                                  action: `Clicked Mail Link`,
                                  label: `Opened email App to contact`,
                                })
                              }
                              href={`mailto:${props.email}`}
                              target="blank"
                            >
                              {props.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="single-info mt-30">
                        <div class="info-icon">
                          <i rel="preload" class="lni-home"></i>
                        </div>
                        <div class="row info-content">
                          <p
                            class="col-lg-5  col-sm-12"
                            style={{ color: "#ffffff" }}
                          >
                            {props.address}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex pt-25 ">
                <div className="d-flex-column">
                  <h6 style={{ color: "white" }}>SOCIAL MEDIA</h6>
                  <ul className="social text-right mt-10">
                    {props.links.facebook_link && (
                      <li>
                        <a
                          onClick={() =>
                            ReactGA.event({
                              category: "Home Page Footer",
                              action: `Clicked Facebook icon`,
                              label: `Opened facebook App`,
                            })
                          }
                          href={`${props.links.facebook_link}`}
                          target="blank"
                        >
                          <i rel="preload" className="lni-facebook-filled"></i>
                        </a>
                      </li>
                    )}
                    {props.links.instagram_link && (
                      <li>
                        <a
                          onClick={() =>
                            ReactGA.event({
                              category: "Home Page Footer",
                              action: `Clicked Instagram icon`,
                              label: `Opened instagram App`,
                            })
                          }
                          href={`${props.links.instagram_link}`}
                          target="blank"
                        >
                          <i rel="preload" className="lni-instagram"></i>
                        </a>
                      </li>
                    )}
                    {props.links.twitter_link && (
                      <li>
                        <a
                          onClick={() =>
                            ReactGA.event({
                              category: "Home Page Footer",
                              action: `Clicked Twitter icon`,
                              label: `Opened twitter App`,
                            })
                          }
                          href={`${props.links.twitter_link}`}
                          target="blank"
                        >
                          <i rel="preload" className="lni-twitter-original"></i>
                        </a>
                      </li>
                    )}
                    {props.links.youtube_link && (
                      <li>
                        <a
                          onClick={() =>
                            ReactGA.event({
                              category: "Home Page Footer",
                              action: `Clicked Youtube icon`,
                              label: `Opened youtube App`,
                            })
                          }
                          href={`${props.links.youtube_link}`}
                          target="blank"
                        >
                          <i rel="preload" class="lni lni-youtube"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-lg-12 mt-30">
                {isMobile ?
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    All rights reserved.{" "}
                    <p>
                      <a href="/" rel="nofollow">
                        &copy; {props.restaurantName}
                      </a>
                    </p>
                    <p>
                      Made in {" "}
                      <a href="https://smartdiner.co/" rel="noopener noreferrer" target="_blank">
                        Smart Diner
                    </a>
                    </p>
                  </div>
                  :
                  <div
                    style={{
                      width: "100%",
                      display: "flex"
                    }}>
                    <p>
                      All rights reserved.{" "}
                      <a href="/" rel="nofollow">
                        &copy; {props.restaurantName}
                      </a>
                      <span style={{ marginLeft: "50px" }}></span>
                      Made in {" "}
                      <a href="https://smartdiner.co/" rel="noopener noreferrer" target="_blank">
                        Smart Diner
                    </a>
                    </p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FootComponent;
