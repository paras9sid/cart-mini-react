import React from "react";


class CartItem extends React.Component {
    render(){
        console.log('this.props' , this.props);
        const {price , title , qty} = this.props.product;
        const {product,
               onDecreaseQuantity, 
               onIncreaseQuantity, 
               onDeleteProduct
            } = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* importing const style written at the bottom styles for css--inline styles */}
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>Rs.{price}</div>
                    <div style={ {color:'#777'} }>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        className="action-icons"
                        alt="increase" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        // onClick={this.increaseQuantity.bind(this)}
                        // w/o binding above function it will show state = undefined
                        //another way - binding done above in state
                        // onClick={()=>this.props.onIncreaseQuantity(this.props.product)}

                        // another way -- using props destructuring written in const above
                        onClick={()=>onIncreaseQuantity(product)}
                        />

                        <img
                        className="action-icons" 
                        alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        
                        <img 
                        className="action-icons" 
                        alt="delete" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>onDeleteProduct(product.id)}
                        />

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