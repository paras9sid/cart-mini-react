import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    
      super(); // calling componenet of parent class --otherwise page display will not render
      this.state = {
          products:[
              {
                  price : 99,
                  title : 'Watch',
                  qty : 1,
                  img:'https://i.ebayimg.com/images/g/6L8AAOSw2~NcGoaq/s-l500.jpg',
                  id:1
              },
              {
                  price : 999,
                  title : 'Mobile Phone',
                  qty : 10,
                  img:'https://m.media-amazon.com/images/I/610pghkO81L._SX522_.jpg',
                  id:2
              },
              {
                  price : 9999,
                  title : 'Laptop',
                  qty : 5,
                  img:'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg',
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

   getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
        count += product.qty;
    });

    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal += product.qty * product.price;
    });
    return cartTotal;
  }
  render(){
    const { products } = this.state;
    return (
      <div className="App">
        {/* making count in navbar dynamic from fixed/static by using below written function */}
        <Navbar count = {this.getCartCount()}/>
        <Cart 
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10}}>Total Price : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
