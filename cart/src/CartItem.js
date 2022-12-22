import React from "react";


class CartItem extends React.Component {
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* importing const style written at the bottom styles for css--inline styles */}
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    {/* applying inline styles */}
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs.999</div>
                    <div style={{color:'#777'}}>Qty:1</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}


                    </div>
                </div>

            </div>
        );
    }
}


const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#CCC'
    }
}

export default CartItem;