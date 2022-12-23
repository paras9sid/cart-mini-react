import React from 'react';
import Cart from './Cart';


function App() {

  // // events practice
  //   function showAlert() {
  //     alert("Hello!");
  //   }
  //   function handleInputchange(e) {
  //     console.log(e.target.value); // will print word by word in console
  //   }
  
  return (
    <div className="App">


    {/* for events written above return */}
    {/* <button onClick={showAlert}>Show Alert</button>
    <input onChange={handleInputchange} /> */}


     {/* <h1>Cart</h1> */}
     {/* Component imported above top and calling below */}
     <Cart />
    </div>
  );
}

export default App;
