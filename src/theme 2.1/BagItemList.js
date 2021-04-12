import React from "react";
import BillItem from "./components/BillItem";
import Bill from "./Bill";
import Delivery from "./Delivery";
import FlipMove from "react-flip-move";
import ReactGA from "react-ga";
import { notShowDirectLocation } from "./constant";

class BagItemList extends React.Component {
  render() {
    return (
      <div>
        <FlipMove duration={500}>
          {this.props.items.map((item, index) => {
            return (
              <BillItem
                key={index}
                description={item.menu.short_description}
                quantity={item.selectedMenuQuantity.quantity}
                itemName={item.menu.name}
                image={item.menu.image}
                price={item.selectedMenuQuantity.price}
                discount={item.menu.discount}
                discountPrice={
                  item.selectedMenuQuantity.price -
                  item.selectedMenuQuantity.price * (item.menu.discount / 100)
                }
                menuQuantity={item.selectedMenuQuantity}
                removeItem={() => {
                  ReactGA.event({
                    category: `In Bag Product: ${item.menu.name}`,
                    action: `Clicked X button with ${item.selectedMenuQuantity.quantity_values.quantity}
                    ${item.selectedMenuQuantity.measure_values.name}`,
                    label: `Removed Item from cart by value ${item.selectedMenuQuantity.quantity}`,
                  });
                  this.props.changequantity(
                    -item.selectedMenuQuantity.quantity,
                    Number(item.menu.category_id),
                    item.menu.id,
                    item.selectedMenuQuantity.id,
                    notShowDirectLocation
                  );
                }}
                increasequantity={() => {
                  ReactGA.event({
                    category: `In Bag Product: ${item.menu.name}`,
                    action: `Clicked + button ${item.selectedMenuQuantity.quantity_values.quantity}
                    ${item.selectedMenuQuantity.measure_values.name}`,
                    label: `Increase quantity by 1`,
                  });
                  this.props.changequantity(
                    1,
                    Number(item.menu.category_id),
                    item.menu.id,
                    item.selectedMenuQuantity.id,
                    notShowDirectLocation
                  );
                }}
                decreasequantity={() => {
                  ReactGA.event({
                    category: `In Bag Product: ${item.menu.name}`,
                    action: `Clicked - button ${item.selectedMenuQuantity.quantity_values.quantity}
                    ${item.selectedMenuQuantity.measure_values.name}`,
                    label: `decrease quantity by 1`,
                  });
                  this.props.changequantity(
                    -1,
                    Number(item.menu.category_id),
                    item.menu.id,
                    item.selectedMenuQuantity.id,
                    notShowDirectLocation
                  );
                }}
              />
            );
          })}
        </FlipMove>
        <Bill
          items={this.props.items}
          payTax={this.props.restaurant_website_detail.should_calculate_gst}
          taxPercentage={this.props.restaurant_website_detail.gst_percentage}
        />
        <Delivery
          restaurant_website_detail={this.props.restaurant_website_detail}
          delivery_slots={this.props.delivery_slots}
        />
      </div>
    );
  }
}

export default BagItemList;
