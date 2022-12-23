import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    render(){

        //rendering list
        const arr = [1,2,3,4,5];
        return (
            <div className="cart">   
                {/* { //rendering list - 12345
                arr }               */}
                {arr.map( (item) => {
                    return item + 5;
                    //result = 678910 in browser arr every item will be added with +5 1+5=6..so on
                })} 
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
            </div>
        );
    }
   
}



export default Cart;