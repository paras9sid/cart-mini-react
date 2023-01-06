import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import { db } from "./index";
import { firestore } from "./firebase";

class App extends React.Component {
  constructor(){
    
      super(); // calling componenet of parent class --otherwise page display will not render
      this.state = {
          products:[], // default empty array now as we are fetching data from firebase db
          loading: true,
      }
    }
   
  componentDidMount() {
    
      firestore
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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

   getCartTotal = () => {
    const {products} = this.state;
    
      let cartTotal = 0;
  
      products.map( (product) => {
  
        if(product.qty > 0){
          cartTotal += product.qty * product.price;
        }    
        return '';
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