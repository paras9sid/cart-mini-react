import React from "react";


class CartItem extends React.Component {
    
    constructor(){
        super(); // calling componenet of parent class --otherwise page display will not render
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img:''
        }
    }
    //grabbing above state data into jsx below

    render(){

        //object destructuring -- so that this.state.___ code should not be used to add again below in div action icons
        //object destructuring from state object again
        const {price , title , qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* importing const style written at the bottom styles for css--inline styles */}
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    {/* applying inline styles */}
                    {/* <div style={ {fontSize:25} }>Phone</div> --can be written below importing state from above*/}
                    {/* <div style={ {fontSize:25} }>{this.state.title}</div> */}

                    {/* importing state object from const above after render(){ line*/}
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>Rs.{price}</div>
                    <div style={ {color:'#777'} }>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img className="action-icons" alt="increase" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                        <img className="action-icons" alt="decrease" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                        <img className="action-icons" alt="delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
                    </div>
                </div>

            </div>
            
        );
    }
}

//used as inline css code above in images main left block img div
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#CCC'
    }
}

export default CartItem;