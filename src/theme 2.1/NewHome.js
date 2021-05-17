import React, { Component } from "react";
import HeadComponent from "./HeadComponent";
import Slider from "./Slider";
import About from "./About";
import Contact from "./Contact";
import FootComponent from "./FootComponent";
import Product from "./Product";
import WhatsAppIcon from "./WhatsAppIcon";
import Bag from "./Bag";
import axios from "axios";
import Description from "./Description";
import MapLocation from "./MapLocation";
import Geocode from "react-geocode";
import GetLocation from "./GetLocation";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import ReactGA from "react-ga";
import CheckoutButton from "./CheckoutButton";
import MultiCards from "./MultiCards";
import calculateTotalPrice from "../helpers/CommonFunctions";

const google = window.google;

class NewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      selectedType: "",
      items: [{}],
      restaurant_info: [{}],
      restaurantBranch: [{}],
      total: 0,
      address: "",
      boundary: false,
      postalcode: "",
      lat: "",
      long: "",
      refpostcode: "",
      refregion: null,
      bagItems: [],
      distance: null,
      showLocationPopup: false,
      showBag: false
      
    };
  }

  async componentDidMount() {
    //API call to get data from backend
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/before_login/restaurant/get_full_details`
        )
        .then((res) => {
          const data = res.data;
          this.getItems(data);
          this.setState({
            restaurant_info: data.restaurant,
            refpostcode: this.state.restaurantBranch[0].delivery_postal_codes
              ? this.state.restaurantBranch[0].delivery_postal_codes.split(",")
              : null,
            refregion: this.state.restaurantBranch[0].delivery_locations
              ? this.state.restaurantBranch[0].delivery_locations.split(",")
              : null,
            isLoaded: true,
          });
          localStorage.setItem(
            "LocationplaceID",
            data.restaurant.get_location_info.get_location_place_id
          );
          localStorage.setItem(
            "LocationTypeID",
            data.restaurant.get_location_info.get_location_type_id
          );
          localStorage.setItem(
            "DeliveryLocations",
            data.restaurant.restaurant_branches[0].delivery_locations
          );
          sessionStorage.setItem("is_ecommerce", data.restaurant.is_ecommerce);
          if (data.restaurant.get_location_info.get_location_type_id === "2") {
            this.setState({
              boundary: true,
              showLocationPopup: false,
            });
            sessionStorage.setItem("boundary", true);
          }
          localStorage.setItem(
            "PaymentType",
            JSON.stringify(data.restaurant.payment_types)
          );

          if (
            sessionStorage.getItem("items") &&
            sessionStorage.getItem("boundary")
          ) {
            this.setState({
              bagItems: JSON.parse(sessionStorage.getItem("items")),
              items: JSON.parse(localStorage.getItem("menu-items")),
              boundary: Boolean(sessionStorage.getItem("boundary")),
              total: sessionStorage.getItem("total"),
            });
          }
          if (sessionStorage.getItem("openCart")) {
            this.setState({ showBag: true });
          }
          sessionStorage.removeItem("openCart");
          if (data.restaurant.restaurant_website_detail.ga_tracking_id) {
            ReactGA.initialize(
              `${data.restaurant.restaurant_website_detail.ga_tracking_id}`
            );
            sessionStorage.setItem(
              "GA",
              data.restaurant.restaurant_website_detail.ga_tracking_id
            );
            ReactGA.pageview("/homepage");
          }

          const favicon = document.getElementById("favicon");
          favicon.href = this.state.restaurant_info.logo;
          document.title = this.state.restaurant_info.name;
          const description = document.getElementById("description");
          description.content = this.state.restaurant_info
            .restaurant_website_detail.page_description
            ? this.state.restaurant_info.restaurant_website_detail
                .page_description
            : this.state.restaurant_info.name;
          document.body.style.setProperty(
            "--primary-color",
            `${this.state.restaurant_info.restaurant_website_detail.primary_colour_code}`
          );
          document.body.style.setProperty(
            "--secondary-color",
            `${this.state.restaurant_info.restaurant_website_detail.secondary_colour_code}`
          );
          sessionStorage.setItem("logo", this.state.restaurant_info.logo);
          sessionStorage.setItem("title", this.state.restaurant_info.name);
          sessionStorage.setItem(
            "restBranchID",
            this.state.restaurantBranch[0].id
          );
          // console.log(this.state.items)
          const title1 = document.getElementById("title1");
          title1.content = `${this.state.restaurant_info.restaurant_website_detail.page_title}`;
        });
    } catch (error) {
      console.log(error);
      alert("Not able to fetch data");
    }
  }

  getItems = (data) => {
    //Storing API data into our state
    let restaurantDetails = [];
    data.restaurant.restaurant_branches.map((item) => {
      restaurantDetails.push(item);
    });
    this.setState({ restaurantBranch: restaurantDetails });
    
    let items = [];

    data.menus.map((item) => {
      items.push(item);
    });
    this.setState({ items: items });
    sessionStorage.setItem("initialItem", JSON.stringify(items));
    this.getCategories(items);
  };
  getCategories = (items) => {
    //fetching categories from itemsarray
    let categoryArray = [];
    items.map((item) => {
      if (item.id) {
        if (categoryArray.indexOf(item.id) === -1) {
          let data = {
            id: item.id,
            name: item.name,
          };
          categoryArray.push(data);
        }
      }
    });

    this.setState({ categoryArray: categoryArray });
  };

  changequantity = (
    value,
    categoryID,
    menuID,
    selectedMenuQuantityMeasurePriceId,
    showDirectLocation
  ) => {
    let newItemsArray = this.state.items;
    for (let i = 0; i < newItemsArray.length; i++) {
      if (newItemsArray[i].id === categoryID) {
        for (let j = 0; j < newItemsArray[i].menus.length; j++) {
          if (newItemsArray[i].menus[j].id === menuID) {
            for (
              let k = 0;
              k <
              newItemsArray[i].menus[j].menu_quantity_measure_price_list.length;
              k++
            ) {
              if (
                newItemsArray[i].menus[j].menu_quantity_measure_price_list[k]
                  .id === selectedMenuQuantityMeasurePriceId
              ) {
                if (
                  newItemsArray[i].menus[j].menu_quantity_measure_price_list[k][
                    "quantity"
                  ]
                ) {
                  newItemsArray[i].menus[j].menu_quantity_measure_price_list[k][
                    "quantity"
                  ] =
                    newItemsArray[i].menus[j].menu_quantity_measure_price_list[
                      k
                    ]["quantity"] + value;
                } else if (value === 1) {
                  newItemsArray[i].menus[j].menu_quantity_measure_price_list[k][
                    "quantity"
                  ] = 1;
                }
              }
            }
          }
        }
      }
    }
    this.setState({ items: newItemsArray });
    localStorage.setItem("menu-items", JSON.stringify(newItemsArray));
    this.computeBagItems(newItemsArray, showDirectLocation);
  };

  computeBagItems = (items, showDirectLocation) => {
    let selectedMenuArray = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].menus.length; j++) {
        for (
          let k = 0;
          k < items[i].menus[j].menu_quantity_measure_price_list.length;
          k++
        ) {
          if (
            items[i].menus[j].menu_quantity_measure_price_list[k].quantity > 0
          ) {
            let menu = {
              menu: items[i].menus[j],
              selectedMenuQuantity:
                items[i].menus[j].menu_quantity_measure_price_list[k],
            };
            selectedMenuArray.push(menu);
          }
        }
      }
    }
    this.setState({ bagItems: selectedMenuArray });
    sessionStorage.setItem("items", JSON.stringify(selectedMenuArray));
    let total = selectedMenuArray.length;
    this.setState({ total: total });
    sessionStorage.setItem("total", total);
    if (total === 0) {
      this.setState({ showBag: false });
    }
    if (total > 0 && this.state.boundary === false && showDirectLocation) {
      this.setState({ showLocationPopup: true });
    }
  };

  setType = (type) => {
    //to display respective items for menu items selected
    this.setState({
      selectedType: type,
    });
    ReactGA.event({
      category: "Menu",
      action: "Category",
      label: "Clicked to different menu category option",
    });
  };

  togglePopup = () => {
    //to open and close the cart(bag) component
    if (this.state.total > 0) {
      this.setState({
        showBag: !this.state.showBag,
      });
    }
  };

  checkDistance = () => {
    let distance;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let origin = [
          `${Number(this.state.restaurantBranch[0].lat)},${Number(
            this.state.restaurantBranch[0].long
          )}`,
        ];

        let destination = [
          `${position.coords.latitude},${position.coords.longitude}`,
        ];

        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: origin,
            destinations: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
          },
          async (response, status) => {
            if (status !== "OK") {
              alert("Error was: " + status);
            } else if (
              Boolean(
                response.rows[0].elements[0].distance &&
                  response.rows[0].elements[0].distance.value
              ) === true
            ) {
              distance = response.rows[0].elements[0].distance.value;
              let address;
              Geocode.fromLatLng(
                position.coords.latitude,
                position.coords.longitude
              ).then(
                (response) => {
                  address = response.results[0];
                  this.setState({
                    postalcode:
                      address.address_components[
                        address.address_components.length - 1
                      ].long_name,
                  });
                  this.setState({ address: address.formatted_address });

                  sessionStorage.setItem("lat", position.coords.latitude);
                  sessionStorage.setItem("long", position.coords.longitude);
                  sessionStorage.setItem("address", this.state.address);

                  const distanceLimit = Number(
                    this.state.restaurantBranch[0].delivery_distance
                  );
                  distance = Math.abs(distance / 1000);
                  let withInDistance = false;
                  if (distance <= distanceLimit) {
                    withInDistance = true;
                  } else {
                    alert(
                      "Sorry for our Incovenience.... You're out of our service boundary"
                    );
                    this.setState({
                      boundary: false,
                      items: JSON.parse(sessionStorage.getItem("initialItem")),
                    });
                  }

                  if (withInDistance && this.state.refregion) {
                    let flag;
                    const addr = this.state.refregion.map((item) =>
                      item.toLowerCase()
                    );
                    for (
                      let i = 0;
                      i < address.address_components.length;
                      i++
                    ) {
                      if (
                        addr.includes(
                          address.address_components[i].long_name.toLowerCase()
                        ) ||
                        addr.includes(
                          address.address_components[i].short_name.toLowerCase()
                        )
                      ) {
                        flag = true;
                        break;
                      }
                    }
                    if (
                      withInDistance <= distanceLimit &&
                      (this.state.refpostcode.includes(
                        Number(this.state.postalcode)
                      ) ||
                        flag)
                    ) {
                      alert("Thank you! We are happy to serve you...");
                      this.setState({ boundary: true });
                      sessionStorage.setItem("boundary", true);
                    }
                  } else if (withInDistance) {
                    alert("Thank you! We are happy to serve you...");
                    this.setState({ boundary: true });
                    sessionStorage.setItem("boundary", true);
                  }
                  if (this.state.boundary) {
                    ReactGA.event({
                      category: "Location access",
                      action:
                        "Clicked Pick-my-Location and Inside service boundary",
                      label: this.state.address,
                      value: 1,
                    });
                  } else {
                    ReactGA.event({
                      category: "Location access",
                      action:
                        "Clicked Pick-my-Location and Outside service boundary",
                      label: this.state.address,
                      value: 1,
                    });
                  }
                },
                (error) => {
                  console.error(error);
                }
              );
            } else {
              alert(
                "Sorry! We cannot deliver there. Please try with other locations."
              );
            }
          }
        );
      },

      () => {
        alert("Please allow location access to determine your location");
      }
    );
  };

  // particular for LocationSeacrhinput

  PAhandleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    let distance;
    geocodeByAddress(address)
      .then((results) => {
        this.setState({
          postalcode:
            results[0].address_components[
              results[0].address_components.length - 1
            ].long_name,
        });

        getLatLng(results[0]).then((latLng) => {
          let origin = [
            `${Number(this.state.restaurantBranch[0].lat)},${Number(
              this.state.restaurantBranch[0].long
            )}`,
          ];
          let destination = [`${latLng.lat},${latLng.lng}`];
          const service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
            {
              origins: origin,
              destinations: destination,
              travelMode: google.maps.TravelMode.DRIVING,
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false,
            },
            async (response, status) => {
              if (status !== "OK") {
                alert("Error was: " + status);
              } else if (
                Boolean(
                  response.rows[0].elements[0].distance &&
                    response.rows[0].elements[0].distance.value
                ) === true
              ) {
                distance = response.rows[0].elements[0].distance.value;
                sessionStorage.setItem("lat", latLng.lat);
                sessionStorage.setItem("long", latLng.lng);
                sessionStorage.setItem("address", address);

                const distanceLimit = Number(
                  this.state.restaurantBranch[0].delivery_distance
                );
                distance = Math.abs(distance / 1000);
                let withInDistance = false;
                if (distance <= distanceLimit) {
                  withInDistance = true;
                } else {
                  alert(
                    "Sorry for our Incovenience.... You're out of our service boundary"
                  );
                  this.setState({ boundary: false });
                }
                if (withInDistance && this.state.refregion) {
                  let flag;
                  const addr = this.state.refregion.map((item) =>
                    item.toLowerCase()
                  );
                  for (
                    let i = 0;
                    i < results[0].address_components.length;
                    i++
                  ) {
                    if (
                      addr.includes(
                        results[0].address_components[i].long_name.toLowerCase()
                      ) ||
                      addr.includes(
                        results[0].address_components[
                          i
                        ].short_name.toLowerCase()
                      )
                    ) {
                      flag = true;
                      break;
                    }
                  }

                  if (
                    this.state.refpostcode.includes(
                      Number(
                        results[0].address_components[
                          results[0].address_components.length - 1
                        ].long_name
                      )
                    ) ||
                    flag
                  ) {
                    alert("Thank you! We are happy to serve you...");
                    this.setState({ boundary: true });
                    sessionStorage.setItem("boundary", true);
                  } else {
                    alert(
                      "Sorry for our Incovenience.... You're out of our service boundary"
                    );
                    this.setState({
                      boundary: false,
                      items: JSON.parse(sessionStorage.getItem("initialItem")),
                    });
                  }
                } else if (withInDistance) {
                  alert("Thank you! We are happy to serve you...");
                  this.setState({ boundary: true });
                  sessionStorage.setItem("boundary", true);
                }

                if (this.state.boundary) {
                  ReactGA.event({
                    category: "Location access",
                    action: "Searched for address and Inside service boundary",
                    label: address,
                    value: 1,
                  });
                } else {
                  ReactGA.event({
                    category: "Location access",
                    action: "Searched for address and Outside service boundary",
                    label: address,
                    value: 1,
                  });
                }
              } else {
                alert(
                  "Sorry! We cannot deliver there. Please try with other locations."
                );
              }
            }
          );
        });
      })
      .catch((error) => console.error("Error", error));
    //   address = null
  };

  close = () => {
    if (this.state.boundary === true) {
      this.setState({ showLocationPopup: false });
    } else {
      this.setState({
        total: 0,
        showLocationPopup: false,
        items: JSON.parse(sessionStorage.getItem("initialItem")),
      });
    }
  };

  gotocart = () => {
    this.setState({ showLocationPopup: false });
    this.togglePopup();
    ReactGA.event({
      category: "Location access",
      action: "Clicked Go to cart button",
      label: "User directly when to cart after adding 1 item",
    });
  };

  contshpng = () => {
    this.setState({ showLocationPopup: false });
    ReactGA.event({
      category: "Location access",
      action: "Clicked continue shopping button",
      label: "User continued to view more menu items",
    });
  };

  editlocation = () => {
    this.togglePopup();
    this.setState({
      showLocationPopup: true,
    });
  };
  // ends here

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <div className="preloader">
            <div className="spin">
              <div className="cube1"></div>
              <div className="cube2"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.restaurant_info.get_location_info.get_location_type_id ===
            "1" &&
            this.state.showLocationPopup && (
              <GetLocation
                address={this.state.address}
                getCoords={this.getCoords}
                handleChange={this.handleChange}
                checkDistance={this.checkDistance}
                PAhandleChange={this.PAhandleChange}
                handleSelect={this.handleSelect}
                close={this.close}
                pickMyLocation={
                  this.state.restaurant_info.restaurant_website_detail
                    .is_pick_my_location_enabled
                }
                boundary={this.state.boundary}
                gotocart={this.gotocart}
                contshpng={this.contshpng}
              />
            )}

          <div
            style={
              this.state.restaurant_info.get_location_info
                .get_location_type_id === "1" && this.state.showLocationPopup
                ? {
                    pointerEvents: "none",
                    filter: "blur(7px)",
                  }
                : {}
            }
          >
            {this.state.showBag &&
              !this.state.showLocationPopup &&
              this.state.total !== 0 && (
                <Bag
                  closePopup={this.togglePopup}
                  changequantity={this.changequantity}
                  items={this.state.bagItems}
                  total={this.state.total}
                  quantity={this.state.quantity}
                  editlocation={this.editlocation}
                  disc1={this.state.restaurantBranch[0].discount_on_mrp}
                  restaurant_website_detail={
                    this.state.restaurant_info.restaurant_website_detail
                  }
                  
                  is_ecommerce={this.state.restaurant_info.is_ecommerce}
                  
                  delivery_slots={
                    this.state.restaurantBranch[0] &&
                    this.state.restaurantBranch[0].delivery_slots &&
                    this.state.restaurantBranch[0].delivery_slots.split(",")
                  }
                />
              )}
              />
             
            <HeadComponent
              togglePopup={this.togglePopup}
              total={this.state.total}
              logo={this.state.restaurant_info.logo}
              restaurantName={this.state.restaurant_info.name}
            />
            <div className="mt-200">
              <div
                style={
                  this.state.showBag &&
                  !this.state.showLocationPopup &&
                  this.state.total &&
                  sessionStorage.getItem("boundary") !== 0
                    ? {
                        pointerEvents: "none",
                        filter: "blur(10px)",
                      }
                    : {}
                }
              >
                {this.state.restaurant_info.restaurant_website_detail
                  .slider_images?.length > 0 && (
                  <Slider
                    slider_images={
                      this.state.restaurant_info.restaurant_website_detail
                        .slider_images
                    }
                    contact_number={
                      this.state.restaurantBranch[0].contact_number
                    }
                  />
                )}
              </div>

              <div
                style={
                  this.state.showBag &&
                  !this.state.showLocationPopup &&
                  this.state.total &&
                  sessionStorage.getItem("boundary") !== 0
                    ? {
                        pointerEvents: "none",
                        filter: "blur(10px)",
                        position: "fixed",
                      }
                    : {}
                }
              >
                <MultiCards
                  cards={JSON.parse(
                    this.state.restaurant_info.restaurant_website_detail.cards
                  )}
                />
                <Description
                  delivery_locations={
                    this.state.restaurantBranch[0].delivery_locations_to_display
                  }
                  preOrder={
                    this.state.restaurant_info.restaurant_website_detail
                      .is_pre_booking_enabled
                  }
                  preOrderImage={
                    this.state.restaurant_info.restaurant_website_detail
                      .pre_order_info_image
                  }
                  customisation_info_content={JSON.parse(
                    this.state.restaurant_info.restaurant_website_detail
                      .customisation_info_content
                  )}
                  has_customisation_info={
                    this.state.restaurant_info.restaurant_website_detail
                      .has_customisation_info
                  }
                />
                <Product
                  setType={this.setType}
                  changequantity={this.changequantity}
                  items={this.state.items}
                  selectedType={this.state.selectedType}
                  categoryArray={this.state.categoryArray}
                  preOrderImage={
                    this.state.restaurant_info.restaurant_website_detail
                      .pre_order_info_image
                  }
                  contact_number={this.state.restaurantBranch[0].contact_number}
                  total={this.state.total}
                  setShowLocationPopup={() => {
                    if (this.state.boundary === false && this.state.total > 0)
                      this.setState({ showLocationPopup: true });
                  }}
                />
                <About
                  about={this.state.restaurant_info.about}
                  timings={this.state.restaurantBranch[0].timings}
                  aboutImage={
                    this.state.restaurant_info.restaurant_website_detail
                      .about_image
                  }
                />

                <MapLocation
                  restaurantName={this.state.restaurant_info.name}
                  address={this.state.restaurantBranch[0].name}
                />
                <Contact />
                {this.state.total > 0 && this.state.boundary && (
                  <CheckoutButton
                    total={this.state.total}
                    checkOutToBag={() => {
                      this.setState({ showLocationPopup: false });
                      ReactGA.event({
                        category: "Home Page",
                        action: `Clicked Checkout Button`,
                        label: `Opens Cart `,
                      });
                      this.togglePopup();
                    }}
                  />
                )}
                <WhatsAppIcon
                  contact_number={this.state.restaurantBranch[0].contact_number}
                  total={this.state.total}
                />
                <FootComponent
                  links={this.state.restaurant_info.restaurant_detail}
                  restaurantName={this.state.restaurant_info.name}
                  address={this.state.restaurantBranch[0].address}
                  email={this.state.restaurantBranch[0].email}
                  contact_number={this.state.restaurantBranch[0].contact_number}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NewHome;
