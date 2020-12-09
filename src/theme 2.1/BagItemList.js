import React from "react";
import BillItem from "./components/BillItem";
import Bill from "./Bill";
import Delivery from "./Delivery";
import FlipMove from "react-flip-move";

class BagItemList extends React.Component {
  values() {
    const total = this.props.items.reduce(function (accumulator, currentValue) {
      const valueToBeAdded =
        currentValue.menu.discount > 0
          ? (currentValue.selectedMenuQuantity.price -
              currentValue.selectedMenuQuantity.price *
                (currentValue.menu.discount / 100)) *
            currentValue.selectedMenuQuantity.quantity
          : currentValue.selectedMenuQuantity.price *
            currentValue.selectedMenuQuantity.quantity;
      const newTotal = accumulator + valueToBeAdded;
      return newTotal;
    }, 0);
    const baseConvenienceFee = (3 / 100) * total + 3;
    const tax = baseConvenienceFee + (18 / 100) * baseConvenienceFee;
    const totalWithTax = total + tax;
    // sessionStorage.setItem("totalWithTax",totalWithTax)
    sessionStorage.setItem("totalWithoutTax", total);

    return [total, tax, totalWithTax];
  }

  // var convenienceFee = ((3/100) * orderPrice) + 3 + ((18/100) * (((3/100) * orderPrice) + 3));
  // var total payable amount = orderPrice + convenienceFee;

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
                // productId={item[key].id}
                discountPrice={
                  item.selectedMenuQuantity.price -
                  item.selectedMenuQuantity.price * (item.menu.discount / 100)
                }
                menuQuantity={item.selectedMenuQuantity}
                removeItem={() => {
                  this.props.changequantity("remove");
                }}
                increasequantity={(e) => {
                  e.preventDefault();
                  this.props.changequantity(1);
                }}
                decreasequantity={(e) => {
                  e.preventDefault();
                  this.props.changequantity(-1);
                }}
              />
            );
          })}
        </FlipMove>
        <Bill values={this.values()} />
        <Delivery
          restaurant_website_detail={this.props.restaurant_website_detail}
        />
      </div>
    );
  }
}

export default BagItemList;
