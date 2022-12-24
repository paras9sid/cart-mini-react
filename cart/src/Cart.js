import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor(){
        super(); // calling componenet of parent class --otherwise page display will not render
        this.state = {
            products:[
                {
                    price : 99,
                    title : 'Watch',
                    qty : 1,
                    img:'',
                    id:1
                },
                {
                    price : 999,
                    title : 'Mobile Phone',
                    qty : 10,
                    img:'',
                    id:2
                },
                {
                    price : 9999,
                    title : 'Laptop',
                    qty : 5,
                    img:'',
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log("Please inc the qty" , product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            // products: products   // shorthand means = products 
            products // using shorthand of above stmt
        })

    }

    handleDecreaseQuantity = (product) => {
        console.log("Please inc the qty" , product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -=1;

        this.setState({
            // products: products   // shorthand means = products 
            products // using shorthand of above stmt
        })

    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item)=> item.id !== id); //[{}] will return array of objects(products) of items whose id !== id
        
        this.setState({
            products : items
        })
    
    }

    render(){
        const { products } = this.state;
        return (
            <div className="cart">   
            {/* props can be passed into any CartItem-component like written below */}
                {/* <CartItem qty={1} price={99} title ={'Watch'} img={''}/> */}
                {/* <CartItem />
                <CartItem /> */}

                {/* using props */}
                {products.map((product)=>{
                //    return <CartItem product = {product}/>
                   //to ignore key warning in console
                   return (
                        <CartItem 
                        product = {product} 
                        key = {product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
   
}



export default Cart;