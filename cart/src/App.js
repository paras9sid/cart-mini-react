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
      // this.db = firebase.firestore(); new latest version of react not working ,imported firestore above already
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
      
        this.setState({
           products: products,
           loading: false 
        });
      
      });
  }

  handleIncreaseQuantity = (product) => {
      // console.log("Please inc the qty" , product);
      const {products} = this.state;
      const index = products.indexOf(product);

      //increasing qty in state
      // products[index].qty +=1;


      // this.setState({
      //     // products: products   // shorthand means = products 
      //     products // using shorthand of above stmt
      // })

      //increase qty in firebase cloud directly 
      //using id below we get the ref of that product which we are increasing
      const docRef = firestore.collection('products').doc(products[index].id)

      docRef
      .update({
        qty : products[index].qty +1,
      })
      .then(() => {
        console.log('document updated successfully');
      })
      .catch((error) =>  {
        console.log('error',error);
      })


  }

  handleDecreaseQuantity = (product) => {
      console.log("Please inc the qty" , product);
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      // //decreasing the state
      // products[index].qty -=1;

      // this.setState({
      //     // products: products   // shorthand means = products 
      //     products // using shorthand of above stmt
      // })

      //decreasing qty with ref of id of product
      const docRef = firestore.collection('products').doc(products[index].id)

      docRef
      .update({
        qty : products[index].qty -1,
      })
      .then(() => {
        console.log('document updated successfully qty decreased');
      })
      .catch((error) =>  {
        console.log('error',error);
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

    //adding product in a firebase 
    addProduct = () => {
      // this.db -- new version not working      
      firestore
      .collection('products')
      .add({  // will add product below - id will be auto generated
        img:'',
        price:900,
        qty:3,
        title:'washing machine'
      })
      .then((docRef)=>{
          console.log('Product added ',docRef);
      })
      .catch((error)=>{
        console.log('error' , error);
      })
    }


 render(){
    const { products ,loading } = this.state;
    return (
      <div className="App">
        {/* making count in navbar dynamic from fixed/static by using below written function */}
        <Navbar count = {this.getCartCount()}/>

        {/* adding products in firebase - lecture */}
        {/* button commented - updating in db lecture */}
        {/* <button onClick={this.addProduct} style={{padding :20 , fontSize:20}}>Add a product</button> */}

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