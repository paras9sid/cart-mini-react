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
                        
                        />
                    )
                })}
            </div>
        );
    }
   
}



export default Cart;