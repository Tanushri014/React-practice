// Shopping Cart



// Display products.

// Each product has:

// Add to Cart button

// Show:

// Total items

// Concepts

// lifting state
// arrays

import { useState } from "react";

function ShoppingCart() {
  const [shoppingItems] = useState([
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Phone", price: 1500 },
    { id: 3, name: "Headphones", price: 500 }
  ]);

  const [customerItemList, setCustomerItem] = useState([]);

  const addElement = (item) => {
    setCustomerItem([...customerItemList, item]);
  };

  return (
    <div>
      <h1>Choose Your Items</h1>

      <ul>
        {shoppingItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => addElement(item)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Total Items: {customerItemList.length}</h2>

      <h3>Cart</h3>
      <ul>
        {customerItemList.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;