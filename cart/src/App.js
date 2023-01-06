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

    //function to change 
//  async componentDidMount() {
//   //this is a realtime listener if you change anything in firebase ui will automatically updated 
//     //  const q = query(
//     //    collection(db, "products"),
//     //    where("price", ">", 0),
//     //    orderBy("price")
//     //  );
//     //  const unsub = await onSnapshot(q, (querySnapshot) => {
//     //    const getProducts = [];
//     //    querySnapshot.forEach((doc) => {
//     //      const product = doc.data();
//     //      product.id = doc.id;
//     //      getProducts.push(product);
//     //    });
//     //    console.log(getProducts);
//     //    this.setState({ products: getProducts, loading: false });
//     //  });

//     const prod = [];
//     onSnapshot(collection(db, 'posts'), (snapshot) => {
//       prod(snapshot.docs.map((doc) => {
//           return {
//               id: doc.id,
//               data: doc.data()
//           }
//       })
//       )
//   })

    // const subs = db
    //               .collection("products")
    //               .onSnapshot((querySnapshot)=>{
    //                   querySnapshot.forEach((doc)=>{
    //                       prod.push({
    //                         ...doc.data(),
    //                         key: doc.id,
    //                       });
    //                       console.log(prod);
    //                 this.setState({
    //                    products: prod, 
    //                    loading: false
    //                  });
    //                   })
    //               })
  //  }

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

  // handleIncreaseQuantity = async (product) => {
  //   let { products } = this.state;
  //   const index = products.indexOf(product);

  //   const docRef = doc(collection(db, "products"), products[index].id);
  //   await updateDoc(docRef, {
  //     qty: products[index].qty + 1,
  //   });
  // };

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
  
  // handleDecreaseQuantity = async (product) => {
  //   let { products } = this.state;
  //   const index = products.indexOf(product);
  //   if (products[index].qty !== 0) {
  //     const docRef = doc(collection(db, "products"), products[index].id);
  //     await updateDoc(docRef, {
  //       qty: products[index].qty - 1,
  //     });
  //   }
  // };

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const items = products.filter((item)=> item.id !== id); //[{}] will return array of objects(products) of items whose id !== id
      
      this.setState({
          products : items
      })    
  }

  // handleDeleteProduct = (productToDelete) => {
  //   const docRef = doc(collection(db, "products"), productToDelete);
  //   deleteDoc(docRef)
  //     .then(() => {
  //       console.log("product deleted");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


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


// import React from 'react';
// import Cart from './Cart';
// import Navbar from './Navbar';

// import {
//   doc,
//   set,
//   addDoc,
//   setDoc,
//   collection,
//   updateDoc,
//   deleteDoc,
//   onSnapshot,
//   query,
//   where,
//   orderBy,
//   // doc,
// } from "firebase/firestore";
// import { db } from "./index";
// import { firestore } from "../firebase";

// // import { async } from '@firebase/util';
// // import { app } from 'firebase-admin';

// class App extends React.Component {
//   constructor(){
//         super();
//         this.state = {
//           products:[],
//           loading : true
//         }
//   }

//   //function to change  -- with new version updated code
//   async componentDidMount() {
//   //this is a realtime listener if you change anything in firebase ui will automatically updated 
//     const q = query(
//       collection(db, "products"),
//       where("price", ">", 0),
//       orderBy("price")
//     );
//     const unsub = await onSnapshot(q, (querySnapshot) => {
//       const getProducts = [];
//       querySnapshot.forEach((doc) => {
//         const product = doc.data();
//         product.id = doc.id;
//         getProducts.push(product);
//       });
//     //  console.log(getProducts);
//       this.setState({ 
//       products: getProducts,
//       loading: false 
//       });
//     });
//   }
    

//   handleIncreaseQuantity = async(product) => { 
      
//       const { products } = this.state;
//       const index = products.indexOf(product);
//       const docRef = doc(collection(db, "products"), products[index].id);
//       await updateDoc(docRef, {
//         qty: products[index].qty + 1,
//       });
//   };
  
//   handleDecreaseQuantity = async(product) => {
      
//       const { products } = this.state;
//       const index = products.indexOf(product);

//       if( products[index].qty ===0 ){
//         const docRef = doc(collection(db, "products"), products[index].id);
//         await updateDoc(docRef, {
//           qty: products[index].qty - 1,
//         });
//       }
//   }
  
//   handleDeleteProduct = (id) => {
//       const { products } = this.state;
//       const items = products.filter((item)=> item.id !== id);// [{}] will pass the array whose item id is not = to the product id
//       this.setState({
//           products:items
//       });
//   }

//   getCartCount = () => {
//     const {products} = this.state

//     let count = 0;

//     products.forEach((product) => {
//       count += product.qty;
//     });

//     return count;
//   }    

//   getCartTotal = () => {
//     const {products} = this.state;

//     let cartTotal = 0;

//     products.map( (product) => {

//       if(product.qty > 0){
//         cartTotal += product.qty * product.price;
//       }    
//       return '';
//     });

//     return cartTotal;
//   }

//   // addProduct = async(product) => {

//   //   const { products } = this.state;
//   //   const docRef = doc(collection(db, "products"));
//      // Add a new document in collection "products"
//     // docRef.set({
//     //   img: '',
//     //   price: 12000,
//     //   qty: 1,
//     //   title: "Washing Machine"
//     // })
//     //   .then(() => {
//     //     console.log("Document successfully written!");
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error writing document: ", error);
//     //   });

//   // }
//   render () {
//     const {products,loading} = this.state;
//     return (
//       <div className="App">
//         <h1>Cart</h1>
//         {/* count dynamic in navbar componenet */}
//         <Navbar count = {this.getCartCount()}/> 
//         {/* <button onClick={this.addProduct} style={ { padding:10,fontSize:20 } }>Add a product</button> */}
//         <Cart 
//           products = {products}
//           onIncreaseQuantity = { this.handleIncreaseQuantity }
//           onDecreaseQuantity = { this.handleDecreaseQuantity }
//           onDeleteProduct = {this.handleDeleteProduct}

//         />
//         {loading && <h1>Loading Products...</h1>}

//         <div style={ { padding:10,fontSize:20 } }>Total : {this.getCartTotal()}</div>
//       </div>
//       );
//   }
// }
// export default App;