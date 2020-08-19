import React from "react"
import BillItem from './components/BillItem'
import Bill from './Bill';
import Delivery from './Delivery';


class BagItemList extends React.Component {
    

    values() {
        const total = this.props.items.reduce(function (accumulator, currentValue) {
            const valueToBeAdded = currentValue.discount>0 ? 
            (currentValue.discountPrice*currentValue.quantity)
            :
            (currentValue.price*currentValue.quantity);
            const newTotal = accumulator + valueToBeAdded 
            return  newTotal
            }, 0);
        const tax = total*0.13
        const totalWithTax = total*1.13
        sessionStorage.setItem("totalWithTax",totalWithTax)
        sessionStorage.setItem("total",total)
    
        return [total, tax, totalWithTax]
    }
    
    

    render() {

        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        if(item.quantity>=1)
                        return  <BillItem
                            key={index}
                            description={item.description}
                            quantity={item.quantity}
                            itemName={item.name}
                            image={item.image}
                            price={item.price}
                            discount={item.discount}
                            discountPrice={item.discountPrice}
                            removeItem={() => this.props.changequantity(index,parseFloat(`-${item.quantity}`))}
                            increasequantity={() => this.props.changequantity(index,1)}
                            decreasequantity={() => this.props.changequantity(index, -1)}
                        />}
                    )
}
                <Bill values={this.values()}/>
                <Delivery values={this.values()}  />
            </div>
        )
    }
}

export default BagItemList