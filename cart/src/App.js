import React from 'react';
import CartItem from './CartItem';


function App() {
  return (
    <div className="App">
     <h1>Cart</h1>
     {/* Component imported above top and calling below */}
     <CartItem />
    </div>
  );
}

export default App;
