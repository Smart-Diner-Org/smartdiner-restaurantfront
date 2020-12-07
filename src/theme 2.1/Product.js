import React, { Component } from "react";
import Item from "./components/Item";
import Menu from "./Menu";
import FlipMove from "react-flip-move";

class Product extends Component {
  render() {
    return (
      <section id="product" className="product-area pt-90 ">
        <div className="container">
          <div className="row ">
            <h2 className="col-lg-3 col-md-4 collection-tilte">Menu</h2>
          </div>
          <div className="row">
            <Menu
              categoryArray={this.props.categoryArray}
              setType={this.props.setType}
              preOrderImage={this.props.preOrderImage}
            />

            <div className="col-lg-9 col-md-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id={this.props.selectedType}
                  role="tabpanel"
                  aria-labelledby={`${this.props.selectedType}-tab`}
                >
                  <div className="product-items mt-30">
                    <>
                      <FlipMove
                        duration={500}
                        className="row product-items-active"
                      >
                        {/* {
                                        this.props.items.map((item, index) => {
                                        if(item.category.id==this.props.selectedType)
                                        return <Item
                                            key={index}
                                            short_description={item.short_description}
                                            description={item.description}
                                            quantity={item.quantity}
                                            itemName={item.name}
                                            image={item.image}
                                            priceList={item.menu_quantity_measure_price_list}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.props.changequantity(item, 1)}
                                            decreasequantity={() => this.props.changequantity(item, -1)}
                                            productId={item.id}
                                            setDesclaimer={this.setDesclaimer}
                                            contact_number = {this.props.contact_number}
                                        />
                                    })
                                } */}
                        {this.props.items.map((singleCategory) => {
                          if (singleCategory.id == this.props.selectedType) {
                            return singleCategory.menus.map((item, index) => {
                              return (
                                <Item
                                  key={index}
                                  short_description={item.short_description}
                                  description={item.description}
                                  quantity={item.quantity}
                                  itemName={item.name}
                                  image={item.image}
                                  priceList={
                                    item.menu_quantity_measure_price_list
                                  }
                                  discount={item.discount}
                                  discountPrice={item.discountPrice}
                                  increasequantity={() =>
                                    this.props.changequantity(item, 1)
                                  }
                                  decreasequantity={() =>
                                    this.props.changequantity(item, -1)
                                  }
                                  categoryID={singleCategory.id}
                                  menuID={item.id}
                                />
                              );
                            });
                          }
                        })}
                      </FlipMove>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
