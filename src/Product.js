import React,{ Component } from 'react'
import Item from './components/Item'
import Food1 from './assets/images/food1.jpg'
import Food2 from './assets/images/food2.jpg'


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[{
                imgLink: Food1,
                itemName: 'Item1',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item2',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item3',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item4',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food2,
                itemName: 'Item5',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food2,
                itemName: 'Item6',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item7',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food2,
                itemName: 'Item8',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food2,
                itemName: 'Item9',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food2,
                itemName: 'Item10',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item11',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
            {
                imgLink: Food1,
                itemName: 'Item12',
                quantity: 1,
                regularPrice: 150,
                discountPrice: 120,
                discount: '20%'
            },
        ]
        };
        this.changequantity = this.changequantity.bind(this)
}
    changequantity(index, value) {
        this.setState(prevState => {
            let newItemsStateArray = prevState.items;
            if (newItemsStateArray[index].quantity === 0 ){
                newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + 1;
                return {
                    items: newItemsStateArray
                }

            }
            if (newItemsStateArray[index].quantity >= 1 ){
                newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + value;

            }
            return {
                items: newItemsStateArray
            }
        })
    }

    render(){
        return(
            <section id="product" class="product-area pt-100 pb-130">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="collection-menu text-center mt-30">
                                <h4 class="collection-tilte">Menu</h4>
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <a class="active" id="breakfast-tab" data-toggle="pill" href="#breakfast" role="tab"
                                        aria-controls="breakfast" aria-selected="true">Breakfast</a>

                                    <a id="lunch-tab" data-toggle="pill" href="#lunch" role="tab" aria-controls="lunch"
                                        aria-selected="false">Lunch</a>

                                    <a id="dinner-tab" data-toggle="pill" href="#dinner" role="tab" aria-controls="dinner"
                                        aria-selected="false">Dinner</a>

                                    <a id="v-pills-outdoor-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab"
                                        aria-controls="v-pills-outdoor" aria-selected="false">Burgers</a>

                                    <a id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab"
                                        aria-controls="v-pills-storage" aria-selected="false">Pizza</a>
                                </div> 
                            </div> 
                        </div>

                        
                        <div class="col-lg-9 col-md-8">
                            <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                                {
                                    this.state.items.map((item, index) => {
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.itemName}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.changequantity(index, 1)}
                                            decreasequantity={() => this.changequantity(index, -1)}
                                        />
                                    })
                                }
                            </div>
                            </div>
                            <div class="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                            {
                                    this.state.items.map((item, index) => {
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.itemName}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.changequantity(index, 1)}
                                            decreasequantity={() => this.changequantity(index, -1)}
                                        />
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                            {
                                    this.state.items.map((item, index) => {
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.itemName}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.changequantity(index, 1)}
                                            decreasequantity={() => this.changequantity(index, -1)}
                                        />
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="v-pills-outdoor" role="tabpanel"
                            aria-labelledby="v-pills-outdoor-tab">
                                  {
                                    this.state.items.map((item, index) => {
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.itemName}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.changequantity(index, 1)}
                                            decreasequantity={() => this.changequantity(index, -1)}
                                        />
                                    })
                                }
                            </div>
                            <div class="tab-pane fade" id="v-pills-storage" role="tabpanel"
                            aria-labelledby="v-pills-storage-tab">
                                  {
                                    this.state.items.map((item, index) => {
                                        return <Item
                                            key={index}
                                            quantity={item.quantity}
                                            itemName={item.itemName}
                                            imgLink={item.imgLink}
                                            regularPrice={item.regularPrice}
                                            discount={item.discount}
                                            discountPrice={item.discountPrice}
                                            increasequantity={() => this.changequantity(index, 1)}
                                            decreasequantity={() => this.changequantity(index, -1)}
                                        />
                                    })
                                }
                            </div>



                        </div>

                    </div>
                </div>
                
        </section>
        );
    }
}

export default Product;
