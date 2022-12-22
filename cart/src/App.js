import React from 'react';
import CartItem from './CartItem';


function App() {

  // events 

  
    function showAlert() {
      alert("Hello!");
    }
  
    function handleInputchange(e) {
      console.log(e.target.value);
    }
  
  return (
    <div className="App">
      
    <button onClick={showAlert}>Show Alert</button>

    <input onChange={handleInputchange} />


     {/* <h1>Cart</h1> */}
     {/* Component imported above top and calling below */}
     {/* <CartItem /> */}
    </div>
  );
}

export default App;
