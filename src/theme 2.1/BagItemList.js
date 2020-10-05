import React from "react"
import BillItem from './components/BillItem'
import Bill from './Bill';
import Delivery from './Delivery';


class BagItemList extends React.Component {
    

    values() {
        const total = this.props.items.reduce(function (accumulator, currentValue) {
            for (let key in  currentValue){
            const valueToBeAdded = currentValue[key].discount>0 ? 
            (currentValue[key].discountPrice*currentValue[key].quantity)
            :
            (currentValue[key].originalPrice*currentValue[key].quantity);
            const newTotal = accumulator + valueToBeAdded 
            return  newTotal
            }}, 0);
        const baseConvenienceFee = ((3/100)*total) + 3
        const tax =  baseConvenienceFee + ((18/100)*baseConvenienceFee);
        const totalWithTax = total + tax;
        // sessionStorage.setItem("totalWithTax",totalWithTax)
        sessionStorage.setItem("totalWithoutTax",total)
    
        return [total, tax, totalWithTax]
    }

// var convenienceFee = ((3/100) * orderPrice) + 3 + ((18/100) * (((3/100) * orderPrice) + 3));
// var total payable amount = orderPrice + convenienceFee;
    
    

    render() {

        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        for(let key in item){
                        return  <BillItem
                            key={index}
                            description={item[key].short_description}
                            quantity={item[key].quantity}
                            itemName={item[key].name}
                            image={item[key].image}
                            price={item[key].originalPrice}
                            discount={item[key].discount}
                            productId={item[key].id}
                            discountPrice={item[key].discountPrice}
                            selectedMenuQuantityMeasurePriceId = {item[key].selectedMenuQuantityMeasurePriceId}
                            menuQuantity = {item[key].menu_quantity_measure_price_list.filter(menu => {return menu.id == item[key].selectedMenuQuantityMeasurePriceId})}
                            removeItem={() =>{
                                 this.props.changequantity(item[key].customKey,"remove");
                                }}
                            increasequantity={() => this.props.changequantity(key,1)}
                            decreasequantity={() => this.props.changequantity(key,-1)}
                        />}}
                    )
}
                <Bill values={this.values()}/>
                <Delivery restaurant_website_detail = {this.props.restaurant_website_detail}  />
            </div>
        )
    }
}

export default BagItemList