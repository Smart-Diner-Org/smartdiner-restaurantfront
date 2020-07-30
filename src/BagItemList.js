import React from "react"
import BillItem from './components/BillItem'
import Bill from './Bill';


class BagItemList extends React.Component {
    constructor(props) {
        super(props);
        this.values = this.values.bind(this)
    }

    values() {
        const total = this.props.items.reduce(function (accumulator, currentValue) {
            const valueToBeAdded = currentValue.discount>0 ? 
            (currentValue.regularPrice*currentValue.quantity-(currentValue.regularPrice*currentValue.quantity*(currentValue.discount/100)))
            :
            (currentValue.price*currentValue.quantity);
            const newTotal = accumulator + valueToBeAdded 
            return  newTotal
            }, 0);
        const tax = total*0.13
        const totalWithTax = total*1.13
    
        return [total, tax, totalWithTax]
    }

    

    render() {



        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        if(item.quantity>=1)
                        return <BillItem
                            key={index}
                            quantity={item.quantity}
                            itemName={item.itemName}
                            regularPrice={item.regularPrice}
                            discount={item.discount}
                            increasequantity={() => this.props.changequantity(index,1)}
                            decreasequantity={() => this.props.changequantity(index, -1)}
                        />
                    })
                }
                <Bill values={this.values()} />
            </div>
        )
    }
}

export default BagItemList